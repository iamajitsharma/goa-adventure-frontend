import { SchemaTypeDefinition, Rule } from "sanity";

const subcategory: SchemaTypeDefinition = {
  name: "subcategory",
  title: "Sub Category",
  type: "document",
  fields: [
    {
      name: "subcategory_title",
      title: "Sub Category Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "subcategory_slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "subcategory_title",
      },
    },
    {
      name: "subcategory_img",
      title: "Image",
      type: "image",
    },
    {
      name: "subcategory_icon",
      title: "Icon",
      type: "image",
    },
  ],
};

export default subcategory;
