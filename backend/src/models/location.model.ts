import { Sequelize, DataTypes, Model } from "sequelize";

interface LocationAttributes {
  location: string;
  parent_location: string;
  description: string;
  image: string;

  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Location
    extends Model<LocationAttributes>
    implements LocationAttributes
  {
    public location!: string;
    public parent_location!: string;
    public description!: string;
    public image!: string;

    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Location.init(
    {
      location: {
        type: DataTypes.STRING,
      },
      parent_location: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT("long"),
      },
      image: {
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
      modelName: "Location",
      tableName: "location",
    }
  );

  return Location;
};
