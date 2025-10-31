import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'approach',
  title: 'Approach',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'subtitle', type: 'string', title: 'Subtitle (optional)'}),
    defineField({
      name: 'levels',
      title: 'Levels',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Level Title',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{type: 'string'}],
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
