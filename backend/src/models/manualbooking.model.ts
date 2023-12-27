import { Sequelize, DataTypes, Model } from "sequelize";
const product = require("./product.model.ts");
const categories = require("./categories.model.ts");
const subcategories = require("./subcategories.model.ts");
const customer = require("./customer.model.ts");
const staff_details = require("./staff.model.ts");
// const Category = db.categories;

interface ManualBookingAttributes {
  product_name: String; //done
  category_id: Number; //done1
  sub_category_id: Number; //done1
  booking_status: number;
  total_seat: string; //done
  total_amount: string; //done
  deposit_amount: string; //done1
  invoice: string; //has to be configured in the backend
  booking_date: string; //done1
  start_date: string; //done
  end_date: string;
  price_per_person: string;
  company_name: string;
  customer_name: String; //done1
  staff_id: Number;
  hotel_name: string;

  payment_mode: number; //done
  customer_mobile_number: string; //done1
  destination_location: string; //done1
  booked_by: string; //done1
  paying_full: Boolean;
  reporting_time: string;
  meeting_point: string;
  pending_amount: string;
  note: string;

  quantity: number;

  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class ManualBooking
    extends Model<ManualBookingAttributes>
    implements ManualBookingAttributes
  {
    public product_name!: String;
    public category_id!: Number;
    public sub_category_id!: Number;
    public total_seat!: string;
    public total_amount!: string;
    public deposit_amount!: string;
    public price_per_person!: string;
    public company_name!: string;

    public staff_id!: Number;
    public hotel_name!: string;

    public invoice!: string;
    public paying_full!: Boolean;
    public booking_date!: string;
    public start_date!: string;
    public customer_name!: String;
    public end_date!: string;
    public booking_status!: number;

    public payment_mode!: number;
    public customer_mobile_number!: string;
    public destination_location!: string;
    public quantity!: number;
    public booked_by!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public note!: string;
    public reporting_time!: string;
    public meeting_point!: string;
    public pending_amount!: string;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  ManualBooking.init(
    {
      //done
      product_name: {
        type: DataTypes.TEXT,
      },
      //dpne
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: categories,
          key: "id",
        },
      },
      //done
      sub_category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: subcategories,
          key: "id",
        },
      },
      staff_id: {
        type: DataTypes.INTEGER,
        references: {
          model: staff_details,
          key: "id",
        },
      },
      //done
      customer_name: {
        type: DataTypes.STRING,
      },
      //done
      total_seat: {
        type: DataTypes.STRING,
      },
      price_per_person: {
        type: DataTypes.STRING,
      },
      company_name: {
        type: DataTypes.STRING,
      },

      hotel_name: {
        type: DataTypes.STRING,
      },
      //done
      total_amount: {
        type: DataTypes.STRING,
      },
      //done
      booking_status: {
        type: DataTypes.INTEGER,
      },
      //done
      deposit_amount: {
        type: DataTypes.STRING,
      },
      //left
      paying_full: {
        type: DataTypes.BOOLEAN,
      },
      //done
      booking_date: {
        type: DataTypes.STRING,
      },
      //done
      start_date: {
        type: DataTypes.STRING,
      },
      //done
      end_date: {
        type: DataTypes.STRING,
      },

      //done
      payment_mode: {
        type: DataTypes.INTEGER,
      },
      //done
      booked_by: {
        type: DataTypes.STRING,
      },
      //done
      customer_mobile_number: {
        type: DataTypes.STRING,
      },
      //elft
      destination_location: {
        type: DataTypes.STRING,
      },

      invoice: {
        type: DataTypes.TEXT("long"),
      },
      //done
      reporting_time: {
        type: DataTypes.STRING,
      },

      quantity: {
        type: DataTypes.SMALLINT,
      },
      //done
      meeting_point: {
        type: DataTypes.STRING,
      },
      //done
      pending_amount: {
        type: DataTypes.STRING,
      },
      note: {
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
      modelName: "ManualBooking",
      tableName: "manualbooking",
    }
  );

  return ManualBooking;
};
