import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blogItem',
  title: 'Blog Item',
  type: 'document',
  fields: [
    defineField({
      name: 'blogId',
      type: 'string',
      title: 'Blog ID',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      type: 'string',
      title: 'Blog Title',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'author',
      type: 'string',
      title: 'Author Name',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Blog Image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'content',
      type: 'array',
      title: 'Blog Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'readTime',
      type: 'string',
      title: 'Estimated Read Time',
      description: 'e.g., "5 min read"',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Untitled Blog',
        subtitle: `By ${subtitle || 'Unknown Author'}`,
        media,
      }
    },
  },
})
