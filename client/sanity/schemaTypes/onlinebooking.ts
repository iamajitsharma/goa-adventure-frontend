import { SchemaTypeDefinition } from "sanity";

const onlineBooking: SchemaTypeDefinition = {
  name: "onlinebooking",
  type: "document",
  title: "Online Bookings",
  fields: [
    {
      name: "customer_name",
      type: "string",
      title: "Customer Name",
    },
    {
      name: "customer_number",
      type: "number",
      title: "Mobile No",
    },
    {
      name: "customer_email",
      type: "string",
      title: "Email",
    },
    {
      name: "products",
      type: "array",
      title: "Products",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product_title",
              type: "string",
              title: "Product Title",
            },
            {
              name: "image",
              type: "string",
              title: "Product Image",
            },
            {
              name: "sale_price",
              type: "number",
              title: "Sale Price",
            },
            {
              name: "quantity",
              type: "number",
              title: "Qty",
            },
            {
              name: "total_amount",
              type: "number",
              title: "Item Total",
            },
            {
              name: "trip_date",
              type: "date",
              title: "Trip Date",
            },
            {
              name: "meeting_point",
              type: "string",
              title: "Meeting Point",
            },
          ],
        },
      ],
    },
    {
      name: "deposit_percent",
      type: "number", // Changed to number for better data handling
      title: "Deposit Percent",
    },
    {
      name: "deposit_amount",
      type: "number",
      title: "Deposit Amount",
    },
    {
      name: "pending_amount",
      type: "number",
      title: "Pending Amount",
    },
    {
      name: "order_total",
      type: "number",
      title: "Order Total",
    },
    {
      name: "coupon_code",
      type: "string",
      title: "Coupon Code",
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
      type: "datetime",
      title: "Booking Date",
    },
  ],
};

export default onlineBooking;
