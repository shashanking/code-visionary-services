import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'reviewItem',
  title: 'Review Item',
  type: 'document',
  fields: [
    defineField({
      name: 'reviewId',
      type: 'string',
      title: 'Review ID',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'reviewer',
      type: 'string',
      title: 'Reviewer Name (Client/User)',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'clientType',
      type: 'string',
      title: 'Client Type',
      description: 'e.g., "E-commerce Platform", "Logistics SaaS", "Nonprofit"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'date',
      type: 'date',
      title: 'Publish Date',
      // options: {
      //   dateFormat: 'MMMM DD, YYYY',
      // },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Client Logo / Image',
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
      name: 'description',
      type: 'text',
      title: 'Review Text',
      validation: (Rule) => Rule.required().min(10).max(500),
    }),

    defineField({
      name: 'video',
      type: 'file',
      title: 'Video Testimonial',
      description: 'Upload video file (MP4, MOV, WEBM)',
      options: {
        accept: 'video/mp4,video/quicktime,video/webm',
      },
    }),

    defineField({
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Rating from 1 to 5',
      validation: (Rule) => Rule.required().min(1).max(5),
      options: {
        list: [
          {title: '1 Star', value: 1},
          {title: '2 Stars', value: 2},
          {title: '3 Stars', value: 3},
          {title: '4 Stars', value: 4},
          {title: '5 Stars', value: 5},
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: 'reviewer',
      subtitle: 'clientType',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Unknown Client',
        subtitle: subtitle || 'Unknown Type',
        media,
      }
    },
  },
})
