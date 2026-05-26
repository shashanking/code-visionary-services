# Portfolio Sanity Schema Update Guide

## Overview
The portfolio section has been refactored to match the blog structure exactly. This document outlines the required changes to your Sanity Studio schema.

## Required Schema Changes

### 1. Update Portfolio Document Type

Replace your existing `portfolioItem` schema with the following structure:

```javascript
export default {
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    {
      name: 'portfolioId',
      title: 'Portfolio ID',
      type: 'string',
      description: 'Unique identifier for the portfolio (e.g., "P001", "P002")',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Websites', value: 'websites' },
          { title: 'Web Applications', value: 'web-applications' },
          { title: 'Mobile Applications', value: 'mobile-applications' },
          { title: 'Branding', value: 'branding' }
        ]
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'portfolioId'
    }
  }
}
```

## Migration Steps

### Step 1: Backup Your Data
Before making any changes, export your existing portfolio data from Sanity Studio.

### Step 2: Update Schema
1. Navigate to your Sanity Studio project
2. Locate the portfolio schema file (usually in `schemas/portfolioItem.js` or similar)
3. Replace the entire schema with the new structure above
4. Save the file

### Step 3: Deploy Schema Changes
```bash
cd your-sanity-studio-folder
sanity deploy
```

### Step 4: Migrate Existing Data
For each existing portfolio item, you'll need to:
1. Add a `portfolioId` field (e.g., "P001", "P002", etc.)
2. Add a `date` field (use the creation date or project completion date)
3. Add an `author` field (e.g., "Code Visionary Services")
4. Ensure `description` exists and is filled
5. Ensure `image` is set as the featured image
6. Convert old complex content (challenges, solutions, gallery, etc.) to the new `content` field using Portable Text blocks

### Step 5: Content Migration Example

**Old Structure:**
- hero.description
- challenges.items[]
- solutions.description
- gallery.images[]
- summary.description
- results.metrics[]

**New Structure:**
All content should be migrated to the `content` field as Portable Text blocks:
- Use H2 for section headings (e.g., "Challenges", "Solutions", "Results")
- Use normal paragraphs for descriptions
- Use images for gallery items
- Use lists for metrics or key points

## Field Mapping Reference

| Old Field | New Field | Notes |
|-----------|-----------|-------|
| N/A | `portfolioId` | New required field - assign unique IDs |
| `slug` | `slug` | Keep as is |
| `title` | `title` | Keep as is |
| N/A | `date` | New required field - use project date |
| N/A | `author` | New required field - use team/company name |
| `hero.description` | `description` | Move to top-level description |
| `hero.image` | `image` | Move to top-level image |
| `category` | `category` | Keep as is |
| All sections | `content` | Migrate to Portable Text |

## Testing

After migration:
1. Verify all portfolio items appear in the portfolio list page
2. Check that portfolio detail pages render correctly
3. Ensure featured portfolios show in the hero carousel
4. Test pagination on the portfolio list page
5. Verify related portfolios section works

## Support

If you encounter issues during migration, check:
- Sanity Studio console for validation errors
- Frontend console for data fetching errors
- Ensure all required fields are populated
- Verify image assets are properly referenced

## Notes

- The new schema is simpler and easier to manage
- Content is now stored as Portable Text, allowing for rich formatting
- The structure matches the blog schema for consistency
- Featured portfolios are determined by the most recent `date` field
