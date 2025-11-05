import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'technology',
  title: 'Tech Stack Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Technology Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Technology Logo',
      type: 'image',
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
      name: 'active',
      title: 'Active Status',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
      description: 'Active = true, only then the technology will be visible in the UI',
    }),

    defineField({
      name: 'highlighted',
      title: 'Highlighted Category',
      type: 'boolean',
      initialValue: false,
      description:
        'Show this technology with special highlighting (e.g., different background color)',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'techCategory'}],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'category.name',
      media: 'image',
      active: 'active',
      highlighted: 'highlighted',
    },
    prepare({title, subtitle, media, active, highlighted}) {
      return {
        title,
        subtitle: `${subtitle ? `Category: ${subtitle}` : 'Uncategorized'} ${active ? '• Active' : ''} ${highlighted ? '• Highlighted' : ''}`,
        media,
      }
    },
  },
})
