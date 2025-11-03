import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'reviewHero',
  title: 'Review Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'reviewerId',
      type: 'string',
      title: 'Reviewer ID',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'name',
      type: 'string',
      title: 'Reviewer Name',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Reviewer Image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
        }),
      ],
    }),

    defineField({
      name: 'date',
      type: 'date',
      title: 'Publish Date',
      // options: {
      //   dateFormat: 'MMMM DD, YYYY',
      // },
      description: 'By this date the reviewer appears in the hero section',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'date',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Unknown Person',
        subtitle: `Date: ${subtitle || 'No Date'}`,
        media,
      }
    },
  },
})
