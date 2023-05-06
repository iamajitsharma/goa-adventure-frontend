'use strict';

module.exports = [
  {
    method: "POST",
    path: "/auth/sms/verify",
    handler: "auth.verifyPhoneNumber",
    config: {
      auth: false,
      middlewares: ['plugin::users-permissions.rateLimit'],
      prefix: '',
    }
  },
  {
    method: "POST",
    path: "/auth/sms/send",
    handler: "auth.sendOTP",
    config: {
      auth: false,
      middlewares: ['plugin::users-permissions.rateLimit'],
      prefix: '',
    }
  },
  {
    method: "POST",
    path: "/auth/token/refresh",
    handler: "auth.refreshToken",
    config: {
      auth: false,
      prefix: '',
    }
  },
  // {
  //   method: "POST",
  //   path: "/auth/login",
  //   handler: "auth.login",
  //   config: {
  //     auth: false,
  //     middlewares: ['plugin::users-permissions.rateLimit'],
  //     prefix: '',
  //   }
  // },
  // {
  //   method: "POST",
  //   path: "/auth/update-user",
  //   handler: "auth.updateUser",
  //   config: {
  //     prefix: '',
  //   }
  // }
];