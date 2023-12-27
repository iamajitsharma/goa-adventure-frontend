const { extractToken, verifyToken } = require("../services/token.service");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { TOKEN_TYPES } = require("../utils/constants");
const catchAsync = require("../utils/catchAsync");
const { customerService, tokenService } = require("../services");
const moment = require("moment");
const verification = async (req, res, resolve, reject, authorisedUserType) => {
  //method to disable jwt verification
  // if (req) {
  //     resolve();
  //     return;
  //   }
  console.log("Requried rights", authorisedUserType);
  const userAccessToken = await req.header("authorization");
  if (!userAccessToken) {
    return reject(
      new ApiError(httpStatus.FORBIDDEN, "Access Token not provided")
    );
  }
  const accessToken = await extractToken(userAccessToken);
  const refreshToken = req.cookies?.jwt;
  if (!refreshToken) {
    return reject(
      new ApiError(httpStatus.FORBIDDEN, "Refresh Token not provided")
    );
  }

  try {
    const verifyAccessToken = await verifyToken(
      accessToken,
      TOKEN_TYPES.ACCESS_TOKEN
    );
    if (
      verifyAccessToken?.tokenType !== TOKEN_TYPES.ACCESS_TOKEN ||
      !verifyAccessToken?.userType
    ) {
      return reject(
        new ApiError(httpStatus.FORBIDDEN, "Token Type not access ")
      );
    }
    const user = await customerService.getCustomerById(
      verifyAccessToken?.userId
    );

    if (!authorisedUserType.includes(verifyAccessToken?.userType)) {
      return reject(
        new ApiError(
          httpStatus.FORBIDDEN,
          "You are not allowed to preform the this action "
        )
      );
    }

    req.user = user;
    req.userId = verifyAccessToken?.userId;
    req.userType = verifyAccessToken?.userType;
  } catch (error) {
    console.log("ERROR NAME ", error);
    if (error && error.name === "TokenExpiredError") {
      console.log("VERIOFYING REFERSH TOKEN", refreshToken);
      let verifyRefreshToken;
      try {
        verifyRefreshToken = await tokenService.verifyToken(
          refreshToken,
          TOKEN_TYPES.REFRESH_TOKEN
        );
      } catch (err) {
        return reject(new ApiError(httpStatus.FORBIDDEN, "Forbidden"));
      }
      if (
        !verifyRefreshToken ||
        verifyRefreshToken.type !== TOKEN_TYPES.REFRESH_TOKEN
      ) {
        return reject(
          new ApiError(httpStatus.FORBIDDEN, "Refresh Token is expired ")
        );
      }
      let refreshDBStatus;
      try {
        refreshDBStatus = await tokenService.searchRefreshToken(
          verifyRefreshToken.userId,
          refreshToken
        );
      } catch (err) {
        return reject(new ApiError(httpStatus.FORBIDDEN, "Forbidden"));
      }

      if (!refreshDBStatus) {
        return reject(
          new ApiError(httpStatus.FORBIDDEN, "No entry for refresh token")
        );
      }
      console.log("Refersh status in DB", refreshDBStatus);
      console.log("REFERSG DECOED", verifyRefreshToken);

      const accessExpiry = moment().add(
        process.env.JWT_ACCESS_EXPIRATION_MINUTES,
        "minutes"
      );

      if (!authorisedUserType.includes(verifyRefreshToken?.userType)) {
        return reject(
          new ApiError(
            httpStatus.FORBIDDEN,
            "You are not allowed to preform the this action "
          )
        );
      }

      const newAccessToken = await tokenService.generateToken(
        TOKEN_TYPES.ACCESS_TOKEN,
        verifyRefreshToken.userId,
        accessExpiry
      );
      console.log("FINALLY NEW ACESS TOKEN GENERTD", newAccessToken);

      const user = await customerService.getCustomerById(
        verifyRefreshToken?.userId
      );
      req.user = user;
      req.userId = verifyRefreshToken?.userId;
      req.userType = verifyRefreshToken?.userType;
      res.set("Access-Control-Expose-Headers", "x-auth-token");
      res.set("x-auth-token", newAccessToken);
    } else {
      console.error(error);
      return reject(new ApiError(httpStatus.FORBIDDEN, "Please log in"));
    }
  }

  //   if (!verifyAccessToken) {
  //   }
  console.log("Access Token", accessToken);
  resolve();
  //   return reject(new ApiError(httpStatus.FORBIDDEN, "Forbidden"));
};

const auth = (authorisedUserType) => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    verification(req, res, resolve, reject, authorisedUserType);
  })
    .then((response) => {
      console.log("response", response);
      next();
    })
    .catch((err) => {
      console.log("Error", err);
      next(err);
    });
};

module.exports = auth;
