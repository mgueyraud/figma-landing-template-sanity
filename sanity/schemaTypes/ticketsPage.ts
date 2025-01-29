import { defineField, defineType, Rule } from 'sanity'
import { TagIcon } from '@sanity/icons'

const ticketSection = {
  name: 'ticketSection',
  title: 'Ticket Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'e.g., "In Person Tickets", "Virtual Tickets"',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'tickets',
      title: 'Tickets',
      type: 'array',
      of: [{ 
        type: 'reference',
        to: [{ type: 'ticket' }],
      }],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

export const ticketsPage = defineType({
  name: 'ticketsPage',
  title: 'Tickets Page',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main title of the tickets page',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Ticket Sections',
      type: 'array',
      of: [ticketSection],
      validation: rule => rule.required().min(1),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoType',
    }),
  ],
}) 