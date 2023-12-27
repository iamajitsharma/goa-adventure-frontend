import { NextFunction } from "express";

const express = require("express");
const helmet = require("helmet");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const compression = require("compression");
const cors = require("cors");
const passport = require("passport");
const httpStatus = require("http-status");
require("dotenv").config();
const routes = require("./routes/v1");
const ApiError = require("./utils/ApiError");
const morgan = require("./config/morgan");
const logger = require("./config/logger");
const cookieParser = require("cookie-parser");
const { errorConverter, errorHandler } = require("./middlewares/error");

const app = express();

// //Serving Image as static
app.use("/static", express.static(path.join(__dirname, "public/image")));

// set security HTTP headers
// app.use(expressLayouts);
// app.set("view engine", "ejs");

// app.use(express.static(path.join(__dirname, "public")));

//adding morgan on all routes
if (process.env.NODE_ENV !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.use(express.json({ limit: "50mb", extended: true }));

// app.use("/v1", routes);

// gzip compression
app.use(compression());

// enable cors
// const corsOptions = {
//   origin: [
//     "http://localhost:3000",
//     "https://goadventure.in",
//     "https://dashboard.goadventure.in",
//     "https://dashboard.goaadventure.in/bookings",
//   ], // replace with your frontend application's URL
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

app.use(cors());

// app.use(cors({ origin: "*", credentials: false }));
// app.options("*", cors({ origin: "*", credentials: false })); // Pre-flight request. Replace * to match your routes if needed.

//middleware for cookies
app.use(cookieParser());

// Require static assets from public folder
app.use(express.static(path.join(__dirname, "public")));

// Set 'views' directory for any views
// being rendered res.render()
app.set("views", path.join(__dirname, "views"));

// Set view engine as EJS
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// jwt authentication
app.use(passport.initialize());

// v1 api routes
app.use("/v1", routes);

app.get("/", (req: Request, res: any) => {
  // throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
  console.log("PRocess", process.env.DATABASE_HOST!);
  console.log("Events");
  res.status(200).send({ status: "Ok" });
});

//error handling middleware
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   next(err);
// });
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: any) => {
  logger.error(error);
  exitHandler();
};
process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

// send back a 404 error for any unknown api request
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Path Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running at: http://localhost:${process.env.PORT}/`);
});
