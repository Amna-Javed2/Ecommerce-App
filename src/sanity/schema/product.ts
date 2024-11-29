import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    }),
    defineField({
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [{type: 'image'}]
      }),
      defineField({
        name: 'description',
        type: 'text',
        title: 'Description of Product',
      }),
      defineField({
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        options: {
            source: 'name'
        }
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Price',
      }),
      defineField({
        name: 'price_id',
        title: 'Stripe Price ID',
        type: 'string',
      }),
      defineField({
        name: 'category',
        type: 'reference',
        title: 'Product Category',
        to: {
            type: 'category'
        }
      }),
  ],
})