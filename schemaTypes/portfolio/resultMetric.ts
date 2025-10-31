import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'resultMetric',
  title: 'Result Metric',
  type: 'object',
  fields: [
    defineField({
      name: 'percentage',
      type: 'string',
      title: 'Percentage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
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
