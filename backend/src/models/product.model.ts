import { Sequelize, DataTypes, Optional, Model } from "sequelize";
const categories = require("./categories.model.ts");
const subcategories = require("./subcategories.model.ts");

// const Category = db.categories;

interface ProductAttributes {
  // id: number;
  title: string; //done
  slug: string; //done
  gallery: string[]; //done
  featured_image: string; //done
  allow_cancel: Boolean; //done
  allow_deposit: Boolean; //done
  video: string; //done
  overview: string; //done;
  duration: string; //done
  creator: string; //done
  state: string; //done
  // category: string; //done
  // category_type: string; //done
  category_id: number; //done
  subcategory_id: number; //done
  city: string; //done
  country: string; //done
  min_people: string; //done
  booking_period: string; //done
  max_people: string; //done
  price: string; //done

  deposit_value: string; //done
  discount_percent: string; //done
  highlight: string[]; //done
  activity_inclusion: string[]; //done
  activity_exclusion: string[]; //done
  activation_status: Boolean;
  createdAt: Date;
  updatedAt: Date;
  last_update_by: string;
  meeting_point: string[];
  keywords: string[];
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Product extends Model<ProductAttributes> implements ProductAttributes {
    // public id!: number;
    public title!: string; //neeeded
    public slug!: string; //neeeded
    public video!: string;
    public overview!: string;
    public duration!: string;
    public creator!: string;
    public state!: string;
    public country!: string;

    public gallery!: string[];
    public featured_image!: string; //needed
    public city!: string; //needed
    public min_people!: string;
    public booking_period!: string;
    public max_people!: string;
    public price!: string; //needed
    public deposit_value!: string;
    public category_id!: number; //done
    public subcategory_id!: number; //done

    public discount_percent!: string; //needed
    public highlight!: string[];
    public activity_inclusion!: string[];
    public activity_exclusion!: string[];
    public meeting_point!: string[];
    public keywords!: string[];

    public createdAt!: Date;
    public updatedAt!: Date;

    public allow_cancel!: Boolean;
    public allow_deposit!: Boolean;
    public last_update_by!: string;
    public activation_status!: Boolean;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Product.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      video: {
        type: DataTypes.TEXT("long"),
      },
      activation_status: {
        type: DataTypes.BOOLEAN,
      },

      featured_image: {
        type: DataTypes.TEXT("long"),
      },
      gallery: {
        type: DataTypes.JSON,
      },
      overview: {
        type: DataTypes.TEXT("long"),
      },
      duration: {
        type: DataTypes.STRING,
      },
      creator: {
        type: DataTypes.STRING,
      },
      allow_cancel: {
        type: DataTypes.BOOLEAN,
      },
      allow_deposit: {
        type: DataTypes.BOOLEAN,
      },
      state: {
        type: DataTypes.STRING,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: categories,
          key: "id",
        },
      },

      subcategory_id: {
        type: DataTypes.INTEGER,
        references: {
          model: subcategories,
          key: "id",
        },
      },
      city: {
        type: DataTypes.STRING,
      },
      last_update_by: {
        type: DataTypes.STRING,
      },
      min_people: {
        type: DataTypes.STRING,
      },
      booking_period: {
        type: DataTypes.STRING,
      },
      max_people: {
        type: DataTypes.STRING,
      },
      deposit_value: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.STRING,
      },

      discount_percent: {
        type: DataTypes.STRING,
      },
      highlight: {
        type: DataTypes.JSON,
      },
      activity_inclusion: {
        type: DataTypes.JSON,
      },
      activity_exclusion: {
        type: DataTypes.JSON,
      },
      meeting_point: {
        type: DataTypes.JSON,
      },
      keywords: {
        type: DataTypes.JSON,
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
      modelName: "Product",
      tableName: "products",
    }
  );

  return Product;
};
