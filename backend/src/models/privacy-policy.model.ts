import { Sequelize, DataTypes, Model } from "sequelize";

interface PrivacyPoliciesAttributes {
  privacy_policies: string;

  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class PrivacyPolicies
    extends Model<PrivacyPoliciesAttributes>
    implements PrivacyPoliciesAttributes
  {
    public privacy_policies!: string;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  PrivacyPolicies.init(
    {
      privacy_policies: {
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
      modelName: "PrivacyPolicies",
      tableName: "privacy_policies",
    }
  );

  return PrivacyPolicies;
};
