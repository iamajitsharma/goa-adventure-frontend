import { Sequelize, DataTypes, Model } from "sequelize";

interface CategoryAttributes {
  category: string;
  activation_status: Boolean;
  category_image: string;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Category
    extends Model<CategoryAttributes>
    implements CategoryAttributes
  {
    public category!: string;
    public activation_status!: Boolean;
    public category_image!: string;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Category.init(
    {
      category: {
        type: DataTypes.STRING,
      },

      category_image: {
        type: DataTypes.TEXT("long"),
      },
      activation_status: {
        type: DataTypes.BOOLEAN,
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
      modelName: "Category",
      tableName: "categories",
    }
  );

  return Category;
};
