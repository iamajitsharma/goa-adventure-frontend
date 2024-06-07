import { SchemaTypeDefinition } from "sanity";

export const websitepolicies: SchemaTypeDefinition = {
  name: "websitepolicies",
  title: "Website Policies",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Policy Title",
      type: "string",
    },
    {
      name: "wef",
      title: "With Effective From",
      type: "date",
    },
    {
      name: "content",
      title: "Policy Condtions",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
