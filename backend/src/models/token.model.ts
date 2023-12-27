import { Sequelize, DataTypes, Model } from "sequelize";

const customer = require("./customer.model.ts");
// const Category = db.categories;

interface TokenAttributes {
  user_id: number;

  refresh_token: string[];

  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Token extends Model<TokenAttributes> implements TokenAttributes {
    public user_id!: number;

    public refresh_token!: string[];
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Token.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
      },

      refresh_token: {
        type: DataTypes.ARRAY(DataTypes.TEXT("long")),
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
      modelName: "Token",
      tableName: "token",
    }
  );

  return Token;
};
