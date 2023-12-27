import { Sequelize } from "sequelize";

const dbConfig = require("../config/db.config.ts");
const prod = require("./product.model.ts");
const country = require("./country.model.ts");
const states = require("./state.model.ts");
const cities = require("./cities.model.ts");
const categories = require("./categories.model.ts");
const subcategories = require("./subcategories.model.ts");
const staff = require("./staff.model.ts");
const customer = require("./customer.model.ts");
const booking = require("./booking.model.ts");
const payment = require("./payment.model.ts");
const terms_conditions = require("./terms-conditions.model.ts");
const privacy_policies = require("./privacy-policy.model.ts");
const location = require("./location.model.ts");
const login = require("./auth.model.ts");
const token = require("./token.model.ts");
const manual_booking = require("./manualbooking.model.ts");
const quotation = require("./quotation.model.ts");
const DATABASE_CLIENT = "postgres";
const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
}: any = process.env;

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true && {
        key: undefined,
        cert: undefined,
        ca: undefined,
        capath: undefined,
        cipher: undefined,
        rejectUnauthorized: false,
      },
    },
    // declaring pool is optional
    // pool: {
    //   max: dbConfig.pool.max,
    //   min: dbConfig.pool.min,
    //   acquire: dbConfig.pool.acquire,
    //   idle: dbConfig.pool.idle
    // }
  }
);

sequelize
  .authenticate()
  .then(function (errors) {
    // console.log(errors);
    // console.log("dbConfig.D", dbConfig.HOST);
  })
  .catch((err) => console.log("Err", err));

interface DB {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  product: any;
  countries: any;
  states: any;
  cities: any;
  booking: any;
  categories: any;
  subcategories: any;
  staff: any;
  customer: any;
  payment: any;
  terms_conditions: any;
  privacy_policies: any;
  location: any;
  login: any;
  token: any;
  manual_booking: any;
  quotation: any;
}

const db: DB = {
  Sequelize,
  sequelize,
  product: prod(sequelize, Sequelize),
  countries: country(sequelize, Sequelize),
  states: states(sequelize, Sequelize),
  cities: cities(sequelize, Sequelize),
  categories: categories(sequelize, Sequelize),
  subcategories: subcategories(sequelize, Sequelize),
  staff: staff(sequelize, Sequelize),
  customer: customer(sequelize, Sequelize),
  booking: booking(sequelize, Sequelize),
  payment: payment(sequelize, Sequelize),
  privacy_policies: privacy_policies(sequelize, Sequelize),
  terms_conditions: terms_conditions(sequelize, Sequelize),
  location: location(sequelize, Sequelize),
  login: login(sequelize, Sequelize),
  token: token(sequelize, Sequelize),
  manual_booking: manual_booking(sequelize, Sequelize),
  quotation: quotation(sequelize, Sequelize),
};

export default db;
