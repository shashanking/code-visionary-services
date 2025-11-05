import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The frequently asked question',
    }),

    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
      description: 'The answer to the question',
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order of FAQ items (lower numbers appear first)',
      initialValue: 0,
    }),

    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Show this FAQ item on the website (Active = true means it is visible)',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Services', value: 'services'},
          {title: 'Pricing', value: 'pricing'},
          {title: 'Support', value: 'support'},
          {title: 'Technical', value: 'technical'},
        ],
      },
      initialValue: 'general',
    }),
  ],

  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'question', direction: 'asc'},
      ],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],

  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
      active: 'active',
    },
    prepare({title, subtitle, active}) {
      return {
        title: title,
        subtitle: `${subtitle ? `Category: ${subtitle}` : 'No Category'} ${active ? '• Active' : '• Inactive'}`,
      }
    },
  },
})
