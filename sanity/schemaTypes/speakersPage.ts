import { defineField, defineType } from 'sanity'

export const speakersPage = defineType({
  name: 'speakersPage',
  title: 'Speakers Page',
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