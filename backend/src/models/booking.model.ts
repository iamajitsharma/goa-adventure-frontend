import { Sequelize, DataTypes, Model } from "sequelize";
const product = require("./product.model.ts");
const categories = require("./categories.model.ts");
const subcategories = require("./subcategories.model.ts");
const customer = require("./customer.model.ts");
// const Category = db.categories;

interface BookingAttributes {
  product_id: Number; //done
  category_id: Number; //done1
  sub_category_id: Number; //done1
  booking_status: number;
  total_seat: string; //done
  total_amount: string; //done
  deposit_amount: string; //done1
  invoice: string; //has to be configured in the backend
  booking_date: Date; //done1
  start_date: Date; //done
  end_date: Date;
  customer_id: Number; //done1
  payment_id: string;
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
  class Booking extends Model<BookingAttributes> implements BookingAttributes {
    public product_id!: Number;
    public category_id!: Number;
    public sub_category_id!: Number;
    public total_seat!: string;
    public total_amount!: string;
    public deposit_amount!: string;
    public invoice!: string;
    public paying_full!: Boolean;
    public booking_date!: Date;
    public start_date!: Date;
    public customer_id!: Number;
    public end_date!: Date;
    public booking_status!: number;
    public payment_id!: string;
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

  Booking.init(
    {
      //done
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: product,
          key: "id",
        },
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

      //done
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: customer,
          key: "id",
        },
      },
      //done
      total_seat: {
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
        type: DataTypes.DATE,
      },
      //done
      start_date: {
        type: DataTypes.DATE,
      },
      //done
      end_date: {
        type: DataTypes.DATE,
      },
      payment_id: {
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
      modelName: "Booking",
      tableName: "bookings",
    }
  );

  return Booking;
};
