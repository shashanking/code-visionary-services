import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'techStackItem',
  title: 'Tech Stack Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Technology Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
