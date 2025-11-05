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
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle ? `Category: ${subtitle}` : 'Uncategorized',
        media,
      }
    },
  },
})
