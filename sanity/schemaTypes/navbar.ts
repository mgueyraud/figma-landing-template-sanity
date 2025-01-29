import { defineField, defineType } from 'sanity'
import { MenuIcon } from '@sanity/icons'
import { footerLink } from './footer'

export const navbar = defineType({
  name: 'navbar',
  title: 'Header Navbar',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'secondaryLinks',
      title: 'Secondary Links',
      description: 'Links that appear before the CTA (e.g., Speakers)',
      type: 'array',
      of: [footerLink],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      description: 'The main action button (e.g., Get tickets)',
      type: 'object',
      fields: footerLink.fields,
      validation: (rule) => rule.required(),
    }),
  ],
}) 