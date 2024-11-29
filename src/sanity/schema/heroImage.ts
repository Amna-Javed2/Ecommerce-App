import {defineField, defineType} from 'sanity'

export const heroImage = defineType({
  name: 'heroImage',
  title: 'Two Hero Images',
  type: 'document',
  fields: [
    defineField({
      name: 'image1',
      type: 'image',
      title: 'First Image'
    }),
    defineField({
        name: 'image2',
        type: 'image',
        title: 'Second Image'
      }),
  ],
})