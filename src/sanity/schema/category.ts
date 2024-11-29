import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of Category'
    }),
  ],
})