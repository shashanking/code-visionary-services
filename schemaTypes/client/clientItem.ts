import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'clientItem',
  title: 'Client Item',
  type: 'document',
  fields: [
    defineField({
      name: 'clientId',
      type: 'string',
      title: 'Client ID',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'name',
      type: 'string',
      title: 'Client Name',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Client Logo/Image',
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
      title: 'Date',
      // options: {
      //   dateFormat: 'MMMM DD, YYYY',
      // },
      description: 'By this date the clients will be appears in the client section',
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
        title: title || 'Untitled Client',
        subtitle: `Date: ${subtitle || 'Unknown Date'}`,
        media,
      }
    },
  },
})
