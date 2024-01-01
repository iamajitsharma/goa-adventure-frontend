import { Sequelize, DataTypes, Model } from "sequelize";

interface CustomerAttributes {
  name: string;
  mobile_number: string;
  email: string;
  city: string;
  isEmailVerified: Boolean;
  isMobileVerified: Boolean;
  isGuest: Boolean;
  state: string;
  country: string;
  status: Boolean;
  profile_image: string;
  createdAt: Date;
  updatedAt: Date;
  activation_status: Boolean;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Customer
    extends Model<CustomerAttributes>
    implements CustomerAttributes
  {
    public name!: string;
    public activation_status!: Boolean;
    public mobile_number!: string;
    public email!: string;
    public city!: string;
    public isEmailVerified!: Boolean;
    public isMobileVerified!: Boolean;
    public state!: string;
    public country!: string;
    public status!: Boolean;
    public profile_image!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public isGuest!: Boolean;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Customer.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      activation_status: {
        type: DataTypes.BOOLEAN,
      },
      mobile_number: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
      isEmailVerified: {
        type: DataTypes.BOOLEAN,
      },
      isMobileVerified: {
        type: DataTypes.BOOLEAN,
      },
      isGuest: {
        type: DataTypes.BOOLEAN,
      },
      profile_image: {
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
      modelName: "Customer",
      tableName: "customers",
    }
  );

  return Customer;
};
