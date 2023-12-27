import { Sequelize, DataTypes, Model } from "sequelize";
const product = require("./product.model.ts");
const categories = require("./categories.model.ts");
const subcategories = require("./subcategories.model.ts");
const customer = require("./customer.model.ts");
// const Category = db.categories;

interface QuotationAttributes {
  name: string;
  mobile_number: string;
  email: string;
  title: string;
  hotel_name: string;
  rooms: string;
  check_out: string;
  check_in: string;
  adult_price: string;
  child: string;
  adult: string;
  child_price: string;
  total_amount: string;
  itinerary: string;
  quotationurl: string;
  cancellation_policy: string;
  days: string;
  nights: string;
  exclusion: string;
  inclusion: string;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Quotation
    extends Model<QuotationAttributes>
    implements QuotationAttributes
  {
    public mobile_number!: string;
    public email!: string;
    public title!: string;
    public hotel_name!: string;
    public rooms!: string;
    public check_out!: string;
    public check_in!: string;
    public adult_price!: string;
    public child!: string;
    public adult!: string;
    public quotationurl!: string;
    public child_price!: string;
    public total_amount!: string;
    public itinerary!: string;

    public cancellation_policy!: string;

    public exclusion!: string;
    public inclusion!: string;
    public name!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public days!: string;
    public nights!: string;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Quotation.init(
    {
      mobile_number: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },

      title: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      hotel_name: {
        type: DataTypes.STRING,
      },
      rooms: {
        type: DataTypes.STRING,
      },
      check_out: {
        type: DataTypes.STRING,
      },
      check_in: {
        type: DataTypes.STRING,
      },
      adult_price: {
        type: DataTypes.STRING,
      },
      child: {
        type: DataTypes.STRING,
      },
      adult: {
        type: DataTypes.STRING,
      },
      child_price: {
        type: DataTypes.STRING,
      },
      total_amount: {
        type: DataTypes.STRING,
      },
      days: {
        type: DataTypes.STRING,
      },
      nights: {
        type: DataTypes.STRING,
      },
      itinerary: {
        type: DataTypes.TEXT("long"),
      },
      quotationurl: {
        type: DataTypes.TEXT("long"),
      },

      cancellation_policy: {
        type: DataTypes.TEXT("long"),
      },

      exclusion: {
        type: DataTypes.TEXT("long"),
      },
      inclusion: {
        type: DataTypes.TEXT("long"),
      },

      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Quotation",
      tableName: "quotations",
    }
  );

  return Quotation;
};
