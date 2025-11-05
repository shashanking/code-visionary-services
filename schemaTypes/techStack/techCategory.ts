import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'techCategory',
  title: 'Tech Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Category Logo (Optional)',
      type: 'image',
      options: {hotspot: true},
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
      name: 'highlighted',
      title: 'Highlighted Category',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order of categories on the website',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'highlighted',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle ? 'Highlighted' : 'Normal',
        media,
      }
    },
  },
})
