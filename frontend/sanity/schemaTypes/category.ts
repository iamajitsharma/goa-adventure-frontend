import { SchemaTypeDefinition, Rule } from "sanity";

const category: SchemaTypeDefinition = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      title: "Category",
      name: "category_name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Category Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "category_name",
      },
    },
    {
      name: "category_img",
      title: "Image",
      type: "image",
    },
    {
      title: "Icon",
      name: "category_icon",
      type: "image",
    },
  ],
};

export default category;
