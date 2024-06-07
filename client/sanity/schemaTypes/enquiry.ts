import { SchemaTypeDefinition } from "sanity";
const EnquirySchema: SchemaTypeDefinition = {
  title: "Enquiry",
  name: "enquiry",
  type: "document",
  fields: [
    { title: "Full Name", name: "fullname", type: "string" },
    { title: "Mobile No.", name: "mobile_number", type: "number" },
    { title: "Email Id", name: "email", type: "string" },
    { title: "Travel Date", name: "travel_date", type: "date" },
    { title: "Traveller", name: "traveller_count", type: "number" },
    { title: "Message", name: "message", type: "string" },
    { title: "url", name: "url", type: "string" },
  ],
};

export default EnquirySchema;
