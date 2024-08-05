import states from "../data/states";
import { SchemaTypeDefinition } from "sanity";

const product: SchemaTypeDefinition = {
  name: "product",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "product_title",
      type: "string",
      title: "Product Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Product Slug",
      options: {
        source: "product_title",
      },
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "category" }],
    },
    {
      name: "subcategory",
      title: "Subcategory",
      type: "reference",
      to: [{ type: "subcategory" }],
      options: {
        filter: ({ document }: any) => {
          return {
            filter: '_type == "subcategory" && category._ref == $category',
            params: {
              category: document.category._ref,
            },
          };
        },
      },
    },

    {
      name: "overview",
      type: "array",
      title: "Overview",
      of: [{ type: "block" }],
    },
    {
      name: "highlight",
      type: "array",
      title: "Highlight",
      of: [{ type: "string" }],
    },
    {
      name: "inclusion",
      type: "array",
      title: "Inclusion",
      of: [{ type: "string" }],
    },
    {
      name: "exclusion",
      type: "array",
      title: "Exclusion",
      of: [{ type: "string" }],
    },
    {
      name: "duration",
      type: "string",
      title: "Duration",
    },
    {
      name: "min_people",
      type: "number",
      title: "Min People",
    },
    {
      name: "max_people",
      type: "number",
      title: "Max People",
    },
    {
      name: "meeting_point",
      type: "array",
      title: "Meeting Point",
      of: [{ type: "string" }],
    },
    {
      name: "booking_period",
      type: "number",
      title: "Booking Period",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "discount",
      type: "number",
      title: "Discount %",
    },
    {
      name: "deposit",
      type: "number",
      title: "Deposit %",
    },

    {
      name: "state",
      type: "string",
      title: "States",
      options: {
        list: [...states],
      },
    },
    {
      name: "location",
      type: "string",
      title: "Location",
    },

    {
      name: "images",
      type: "array",
      title: "Product Images",
      of: [{ type: "image" }],
      preview: {
        select: {
          media: "images",
        },
      },
    },
    {
      name: "video",
      type: "string",
      title: "Video Url",
    },
    // SEO SECTION
    {
      name: "seo",
      type: "object",
      title: "SEO",
      fields: [
        {
          name: "meta_title",
          type: "string",
          title: "Meta Title",
          description: "SEO title for the product page",
        },
        {
          name: "meta_description",
          type: "text",
          title: "Meta Description",
          description: "SEO description for the product page",
          validation: (Rule) =>
            Rule.max(160).warning(
              "Meta description must be under 160 character"
            ),
        },
        {
          name: "meta_keywords",
          type: "array",
          title: "Meta Keywords",
          of: [{ type: "string" }],
          description: "SEO keywords for the product page",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "product_title",
      subtitle: "category.category_name",
      media: "images.0.asset",
    },
  },
};

export default product;
