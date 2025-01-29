import { defineField, defineType } from 'sanity'

export const sponsorsPage = defineType({
  name: 'sponsorsPage',
  title: 'Sponsors Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the sponsors page',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description about the sponsors',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoType',
    }),
  ],
}) 