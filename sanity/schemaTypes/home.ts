import { defineField, defineType, Rule } from 'sanity'
import { HomeIcon } from '@sanity/icons'
import { footerLink } from './footer'

const registrationBanner = {
  name: 'registrationBanner',
  title: 'Registration Banner',
  type: 'object',
  fields: [
    { 
      name: 'title', 
      type: 'string',
      title: 'Title',
      validation: (rule: Rule) => rule.required(),
    },
    { 
      name: 'description', 
      type: 'text',
      title: 'Description',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: footerLink.fields,
      validation: (rule: Rule) => rule.required(),
    },
  ],
}

const lineupSection = {
  name: 'lineupSection',
  title: 'Lineup Section',
  type: 'object',
  fields: [
    { 
      name: 'text', 
      type: 'text',
      title: 'Description',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: footerLink.fields,
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'speakersCount',
      title: 'Number of Speakers',
      type: 'number',
      validation: (rule: Rule) => rule.required().min(0),
    },
    {
      name: 'sessionsCount',
      title: 'Number of Sessions',
      type: 'number',
      validation: (rule: Rule) => rule.required().min(0),
    },
    {
      name: 'attendeesCount',
      title: 'Number of Attendees',
      type: 'number',
      validation: (rule: Rule) => rule.required().min(0),
    },
  ],
}

const sponsorsSection = {
  name: 'sponsorsSection',
  title: 'Sponsors Section',
  type: 'object',
  fields: [
    { 
      name: 'title', 
      type: 'string',
      title: 'Title',
      validation: (rule: Rule) => rule.required(),
    },
    { 
      name: 'description', 
      type: 'text',
      title: 'Description',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'sponsors',
      title: 'Featured Sponsors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sponsor' }] }],
      validation: (rule: Rule) => rule.required().min(1).max(8),
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: footerLink.fields,
      validation: (rule: Rule) => rule.required(),
    },
  ],
}

export const home = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
      description: "The main title shown in the header (e.g., Figma's conference for people who build products)",
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'conferenceDate',
      title: 'Conference Date',
      type: 'text',
      description: 'The date of the conference (e.g., June 26-27 2024)',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'text',
      description: 'The conference location (e.g., Moscone Center San Francisco, CA)',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'registrationBanner',
      title: 'Registration Banner',
      type: 'object',
      fields: registrationBanner.fields,
    }),
    defineField({
      name: 'lineupSection',
      title: 'Lineup Section',
      type: 'object',
      fields: lineupSection.fields,
    }),
    defineField({
      name: 'sponsorsSection',
      title: 'Sponsors Section',
      type: 'object',
      fields: sponsorsSection.fields,
    }),

    defineField({
        name: 'seo',
        title: 'SEO',
        type: 'seoType',
    })
  ],
})
