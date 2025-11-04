import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'serviceItem',
  title: 'Service Item',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceId',
      type: 'string',
      title: 'Service ID',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'label',
      type: 'string',
      title: 'Service Title',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Service Image',
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
      title: 'Service Date',
      // options: {
      //   dateFormat: 'MMMM DD, YYYY',
      // },
      description: 'By this date the services will be appears in the service page and hero section',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Please add 10 to 200 characters',
      validation: (Rule) => Rule.required().min(10).max(200),
    }),

    defineField({
      name: 'tools',
      type: 'array',
      title: 'Tech Stack',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'label',
      subtitle: 'date',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Untitled Service',
        subtitle: `Date: ${subtitle || 'Unknown Date'}`,
        media,
      }
    },
  },
})
