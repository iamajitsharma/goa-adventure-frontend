"use strict";

let otps = {};
const phoneUtil = require("google-libphonenumber").PhoneNumberUtil.getInstance();
const utils = require("@strapi/utils");
const { getService, validateCallbackBody } = require("../utils");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { sanitize } = utils;
const { ApplicationError, ValidationError } = utils.errors;
const { convertToCamelCase } = require("../../../../utils");
const ms = require("ms");

const getRetryAfter = (time) => {
  let timeInterval = ms(time);
  if (timeInterval === undefined) {
    throw new Error("Invalid time.");
  }
  return new Date(Date.now() + timeInterval);
}

const sanitizeUser = (user, ctx) => {
  user = convertToCamelCase(user);
  const { auth } = ctx.state;
  const userSchema = strapi.getModel("plugin::users-permissions.user");
  return sanitize.contentAPI.output(user, userSchema, { auth });
}

// verify the refresh token by using REFRESH_SECRET from the .env
const verifyRefreshToken = (token) => {
  return new Promise(function(resolve, reject) {
    jwt.verify(token, process.env.REFRESH_SECRET, {}, function(err, tokenPayload = {}) {
      if (err) {
        return reject(new Error("Invalid token."))
      }
      resolve(tokenPayload);
    });
  });
};

// issue a refresh token
const issueRefreshToken = (payload, jwtOptions = {}) => {
  _.defaults(jwtOptions, strapi.config.get('plugin.users-permissions.jwt'));
  return jwt.sign(
    _.clone(payload.toJSON ? payload.toJSON() : payload),
    process.env.REFRESH_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRES }
  );
};

function isValidPhoneNumber(countryCode, phoneNumber) {
  const phone = `+${countryCode}${phoneNumber}`;
  const phoneObj = phoneUtil.parse(phone);
  return phoneUtil.isValidNumber(phoneObj);
}

async function login(ctx) {
  const { phoneNumber = null, fcmToken: fcm_token } = ctx.request.body;
  try {
    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: { phone_number: phoneNumber }
    });

    if (!user && phoneNumber) {
      return await register(ctx);
    }
    else if (!user && !phoneNumber) {
      return ctx.badRequest("User not found.");
    }

    // handle multiple fcm tokens when same user 
    // is using different device
    if (fcm_token && !user.fcm_tokens.includes(fcm_token)) {
      user.fcm_tokens.push(fcm_token);
      await strapi.query("plugin::users-permissions.user").update({
        where: { id: user.id },
        data: { fcm_tokens: user.fcm_tokens }
      });
    }

    return ctx.send({
      newUser: false,
      accessToken: getService("jwt").issue({ id: user.id }, { expiresIn: process.env.JWT_EXPIRES }),
      refreshToken: issueRefreshToken({ id: user.id }),
      retryAfter: getRetryAfter(process.env.JWT_EXPIRES),
      user: await sanitizeUser(user, ctx),
      meta: {}
    });
  }

  catch (error) {
    throw new ApplicationError(error.message);
  }
}

async function register(ctx) {
  const { 
    name, 
    email,
    countryCode: country_code,
    phoneNumber: phone_number, 
    fcmToken: fcm_token 
  } = ctx.request.body;

  if (!isValidPhoneNumber(country_code, phone_number)) {
    return ctx.badRequest("Invalid phone number.");
  }

  const store = await strapi.store({ type: 'plugin', name: 'users-permissions' });
  const settings = await store.get({ key: 'advanced' });
  const role = await strapi
    .query("plugin::users-permissions.role")
    .findOne({ where: { type: settings.default_role } });

  try {
    let user = await strapi.query("plugin::users-permissions.user").findOne({
      where: { phone_number }
    });

    if (user) {
      return ctx.send({ 
        status: "failure", 
        message: "This phone number is already in use." 
      });
    }
    

    user = await strapi.query("plugin::users-permissions.user").create({
      data: {
        name,
        email,  
        phone_number,
        country_code,
        role,
        fcm_tokens: [fcm_token],
        confirmed: true,
        speed_threshold: 60,
        alert_frequency: 0,
      }
    });

    return ctx.send({
      newUser: true,
      accessToken: getService("jwt").issue({ id: user.id }, { expiresIn: process.env.JWT_EXPIRES }),
      refreshToken: issueRefreshToken({ id: user.id }),
      retryAfter: getRetryAfter(process.env.JWT_EXPIRES),
      user: await sanitizeUser(user, ctx),
      meta: {}
    });
  } 
  catch (error) {
    throw new ApplicationError(error.message);
  }
}

module.exports = {
  // login,
  // register,
  
  sendOTP: async (ctx) => {
    const { phoneNumber, countryCode } = ctx.request.body;
    if (!isValidPhoneNumber(countryCode, phoneNumber)) {
      return ctx.badRequest("Invalid phone number.");
    }
    // generate otp
    otps[phone] = "1111";
    return ctx.send({ status: "pending", message: "OTP sent" });
  },

  verifyPhoneNumber: async (ctx) => {
    const { phoneNumber, countryCode, verificationCode: vCode } = ctx.request.body;
    // verify the phone and return the status
    let phone = countryCode + phoneNumber;
    let otp = otps[phone] = "1111";
    delete otps[phone];
    let status = vCode === otp ? "success" : "failure";
    return ctx.send({ status });
  },

  refreshToken: async (ctx) => {
    const { refreshToken } = ctx.request.body;

    if (!refreshToken) {
      return ctx.badRequest("No Authorization.");
    }

    try {
      const obj = await verifyRefreshToken(refreshToken);
      const user = await strapi.query("plugin::users-permissions.user").findOne({
        where: { id: obj.id }
      });
  
      return ctx.send({
        accessToken: getService("jwt").issue({ id: user.id }, { expiresIn: process.env.JWT_EXPIRES }),
        refreshToken: issueRefreshToken({ id: user.id }),
        retryAfter: getRetryAfter(process.env.JWT_EXPIRES),
        user: await sanitizeUser(user, ctx),
        meta: {}
      });
    }
    catch (err) {
      return ctx.badRequest(err.toString());
    }
  },

  // updateUser: async (ctx) => {
  //   const { id, name, email, fcmTokens, speedThreshold, alertFrequency } = ctx.request.body;
  //   const data = {};
  //   if (name) data.name = name;
  //   if (fcmTokens) data.fcm_tokens = fcmTokens;
  //   if (speedThreshold) data.speed_threshold = speedThreshold;
  //   if (alertFrequency) data.alert_frequency = alertFrequency;
  //   if (email) data.email = email;

  //   try {
  //     const entry = await strapi.query("plugin::users-permissions.user").update({
  //       where: { id: id ?? ctx.state.user.id },
  //       data,
  //     });

  //     return ctx.send({ user: await sanitizeUser(entry, ctx), meta: {} });
  //   }
  //   catch (err) {
  //     return ctx.badRequest(err.toString());
  //   }
  // },
  
  // callback: async (ctx) => {
  //   const provider = ctx.params.provider || "local";
  //   const params = ctx.request.body;
  //   const store = strapi.store({ type: 'plugin', name: 'user-permissions' });
  //   const grantSettings = await store.get({ key: 'grant' });
  //   const grantProvider = provider === "local" ? "email" : provider;
    
  //   if (! _.get(grantSettings, [grantProvider, 'enabled'])) {
  //     throw new ApplicationError("This provider is disabled.");
  //   }

  //   if (provider === "local") {
  //     await validateCallbackBody(params);
  //     // implement local login logic
  //   }

  //   // Connect the user with the third-party provider.
  //   try {
  //     const user = await getService('providers').connect(provider, ctx.query);
  //     return ctx.send({
  //       jwt: getService('jwt').issue({ id: user.id }, { expiresIn: process.env.JWT_EXPIRES }),
  //       user: await sanitizeUser(user, ctx),
  //     });
  //   }
  //   catch (error) {
  //     throw new ApplicationError(error.message);
  //   }
  // }
};