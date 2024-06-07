import { SchemaTypeDefinition } from "sanity";

const bookings: SchemaTypeDefinition = {
  name: "booking",
  type: "document",
  title: "Bookings",
  fields: [
    {
      name: "customer_name",
      type: "string",
      title: "Customer Name",
    },
    {
      name: "customer_number",
      type: "string",
      title: "Mobile No",
    },
    {
      name: "customer_email",
      type: "string",
      title: "Email",
    },
    {
      name: "product_title",
      type: "string",
      title: "Product Title",
    },

    {
      name: "quantity",
      type: "string",
      title: "Qty",
    },
    {
      name: "total_amount",
      type: "string",
      title: "Total Amt",
    },

    {
      name: "deposit_amount",
      type: "string",
      title: "Deposit",
    },
    {
      name: "pending_amount",
      type: "string",
      title: "Pending Amount",
    },
    {
      name: "trip_date",
      type: "date",
      title: "Trip Date",
    },
    {
      name: "trip_location",
      type: "string",
      title: "Location",
    },
    {
      name: "meeting_point",
      type: "string",
      title: "Meeting Point",
    },
    {
      name: "customer_note",
      type: "string",
      title: "Customer Note",
    },
    {
      name: "order_status",
      type: "string",
      title: "Order Status",
    },
    {
      name: "order_id",
      type: "string",
      title: "Order Id",
    },
    {
      name: "payment_id",
      type: "string",
      title: "Payment Id",
    },
    {
      name: "createdAt",
      type: "string",
      title: "Booking Date",
    },
  ],
};

export default bookings;
