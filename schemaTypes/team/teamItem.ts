import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'teamItem',
  title: 'Team Item',
  type: 'document',
  fields: [
    defineField({
      name: 'teamId',
      type: 'string',
      title: 'Team ID',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'name',
      type: 'string',
      title: 'Team Member Name',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'role',
      type: 'string',
      title: 'Team Member Role',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Team Member Photo',
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
      title: 'Join Date',
      description: 'By this date the team member will appear in the team section',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Bio Description',
      description: 'Add bio within 10 to 200 characters',
      validation: (Rule) => Rule.required().min(10).max(200),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Unknown Team Member',
        subtitle: `${subtitle || 'Unknown Role'}`,
        media,
      }
    },
  },
})
