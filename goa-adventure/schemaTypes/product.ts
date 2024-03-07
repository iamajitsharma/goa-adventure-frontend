import states from '../data/states'

export default {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'product_title',
      type: 'string',
      title: 'Product Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'product_title',
      },
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
    },
    {
      name: 'subcategory',
      title: 'Subcategory',
      type: 'reference',
      to: [{type: 'subcategory'}],
      options: {
        filter: ({document}: any) => {
          return {
            filter: '_type == "subcategory" && category._ref == $category',
            params: {
              category: document.category._ref,
            },
          }
        },
      },
    },

    {
      name: 'overview',
      type: 'array',
      title: 'Overview',
      of: [{type: 'block'}],
    },
    {
      name: 'highlight',
      type: 'array',
      title: 'Highlight',
      of: [{type: 'string'}],
    },
    {
      name: 'inclusion',
      type: 'array',
      title: 'Inclusion',
      of: [{type: 'string'}],
    },
    {
      name: 'exclusion',
      type: 'array',
      title: 'Exclusion',
      of: [{type: 'string'}],
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Duration',
    },
    {
      name: 'min_people',
      type: 'number',
      title: 'Min People',
    },
    {
      name: 'max_people',
      type: 'number',
      title: 'Max People',
    },
    {
      name: 'meeting_point',
      type: 'array',
      title: 'Meeting Point',
      of: [{type: 'string'}],
    },
    {
      name: 'booking_period',
      type: 'number',
      title: 'Booking Period',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Discount %',
    },
    {
      name: 'deposit',
      type: 'number',
      title: 'Deposit %',
    },

    {
      name: 'state',
      type: 'string',
      title: 'States',
      options: {
        list: [...states],
      },
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },

    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'video',
      type: 'string',
      title: 'Video Url',
    },
  ],
}
