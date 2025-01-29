import { defineField, defineType } from 'sanity'
import { StackCompactIcon } from '@sanity/icons'
import type { Rule } from 'sanity'
import { LinkIcon } from '@sanity/icons'
import { ListIcon } from '@sanity/icons'

export const footerLink = {
  name: 'footerLink',
  title: 'Footer Link',
  icon: LinkIcon,
  type: 'object',
  fields: [
    {
      name: 'displayText',
      title: 'Display Text',
      description: 'The text that will be shown for this link',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      description: 'The URL this link points to (e.g., /speakers, /tickets)',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'displayText',
      subtitle: 'url',
    }
  }
}

const footerColumn = {
  name: 'footerColumn',
  title: 'Footer Column',
  
  icon: ListIcon,
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Column Title',
      description: 'The heading for this column (e.g., Menu, Resources)',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [footerLink],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: StackCompactIcon,
  fields: [
    defineField({
      name: 'columns',
      title: 'Footer Columns',
      description: 'A column in the footer containing a title and list of links',
      type: 'array',
      of: [footerColumn],
      validation: Rule => Rule.required().min(1),
    }),
  ],
}) 