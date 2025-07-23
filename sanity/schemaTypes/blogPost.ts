import {defineField, defineType} from 'sanity'

export const blogPostType = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'creator',
      title: 'Creator(s)',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blogBody',
      title: 'Blog Body',
      type: 'object',
      fields: [
        defineField({
          name: 'introduction',
          title: 'Introduction',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sections',
          title: 'Sections',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title', 
                  type: 'string', 
                  validation: (Rule) => Rule.required()
                }),
                defineField({
                  name: 'content', 
                  type: 'text',
                  validation: (Rule) => Rule.required()
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
          name: 'conclusion',
          title: 'Conclusion',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
