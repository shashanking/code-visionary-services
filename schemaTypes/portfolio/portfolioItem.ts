import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Project ID',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'subtitle',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Project Subtitle',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          {title: 'Websites', value: 'websites'},
          {title: 'Web Applications', value: 'web-applications'},
          {title: 'Mobile Applications', value: 'mobile-applications'},
          {title: 'Branding', value: 'branding'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          validation: (Rule) => Rule.required(),
        },
        {name: 'client', type: 'string', title: 'Client', validation: (Rule) => Rule.required()},
        {name: 'role', type: 'string', title: 'Role', validation: (Rule) => Rule.required()},
        {name: 'date', type: 'string', title: 'Date', validation: (Rule) => Rule.required()},
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {hotspot: true},
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    defineField({
      name: 'challenges',
      title: 'Challenges',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required()},
        {name: 'subtitle', type: 'text', title: 'Subtitle', validation: (Rule) => Rule.required()},
        {
          name: 'items',
          title: 'Challenge Items',
          type: 'array',
          of: [{type: 'challengeItem'}],
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'solutions',
      title: 'Solutions',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required()},
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'techStack',
          title: 'Tech Stack',
          type: 'array',
          of: [{type: 'techStackItem'}],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'approaches',
          title: 'Approaches',
          type: 'array',
          of: [{type: 'approach'}],
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required()},
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {hotspot: true},
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    defineField({
      name: 'results',
      title: 'Results',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title (optional)'},
        {
          name: 'metrics',
          title: 'Metrics',
          type: 'array',
          of: [{type: 'resultMetric'}],
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'hero.client',
      media: 'hero.image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Untitled Project',
        subtitle: subtitle ? `Client: ${subtitle}` : '',
        media,
      }
    },
  },
})
