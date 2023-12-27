import { Sequelize, DataTypes, Model } from "sequelize";

const booking = require("./booking.model.ts");
const customer = require("./customer.model.ts");
// const Category = db.categories;
const product = require("./product.model.ts");

interface PaymentAttributes {
  amount: String;
  razorpay_payment_id: String;
  razorpay_order_id: String;
  razorpay_signature: String;
  booking_id: Number;
  customer_id: Number;
  status: String;
  product_id: number;
  quantity: String;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
    public createdAt!: Date;
    public updatedAt!: Date;
    public amount!: string;
    public quantity!: string;
    public razorpay_payment_id!: string;
    public razorpay_order_id!: string;
    public razorpay_signature!: string;
    public booking_id!: number;
    public product_id!: number;
    public customer_id!: number;
    public status!: string;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Payment.init(
    {
      booking_id: {
        type: DataTypes.INTEGER,
        references: {
          model: booking,
          key: "id",
        },
      },
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: customer,
          key: "id",
        },
      },
      amount: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: product,
          key: "id",
        },
      },
      razorpay_payment_id: {
        type: DataTypes.STRING,
      },
      razorpay_order_id: {
        type: DataTypes.STRING,
      },
      razorpay_signature: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
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
      modelName: "Payment",
      tableName: "payment_orders",
    }
  );

  return Payment;
};
