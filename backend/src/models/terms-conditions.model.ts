import { Sequelize, DataTypes, Model } from "sequelize";

interface TermsConditionsAttributes {
  terms_conditions: string;

  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class TermsConditions
    extends Model<TermsConditionsAttributes>
    implements TermsConditionsAttributes
  {
    public terms_conditions!: string;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  TermsConditions.init(
    {
      terms_conditions: {
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
      modelName: "TermsConditions",
      tableName: "terms_conditions",
    }
  );

  return TermsConditions;
};
