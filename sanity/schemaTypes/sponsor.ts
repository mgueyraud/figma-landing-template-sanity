import { defineField, defineType } from 'sanity'
import { DiamondIcon } from '@sanity/icons'
import { HeartIcon } from '@sanity/icons'

export const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  icon: HeartIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Sponsor Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Sponsor Logo',
      type: 'image',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
  ],
})

export const sponsorCategory = defineType({
  name: 'sponsorCategory',
  title: 'Sponsor Category',
  type: 'document',
  icon: DiamondIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Group Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sponsor' }] }],
    }),
  ],
}) 