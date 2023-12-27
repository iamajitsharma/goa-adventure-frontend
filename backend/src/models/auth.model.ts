import { Sequelize, DataTypes, Model } from "sequelize";

interface LoginAttributes {
  email: string;
  mobile_number: string;

  password: string;
  type: number;

  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Login extends Model<LoginAttributes> implements LoginAttributes {
    public email!: string;
    public mobile_number!: string;

    public password!: string;
    public type!: number;

    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Login.init(
    {
      email: {
        type: DataTypes.STRING,
      },
      mobile_number: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.TEXT("long"),
      },
      type: {
        type: DataTypes.INTEGER,
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
      modelName: "Login",
      tableName: "login",
    }
  );

  return Login;
};
