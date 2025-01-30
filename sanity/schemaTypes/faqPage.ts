import { defineField, defineType, Rule } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

const question = {
  name: 'question',
  title: 'Question',
  type: 'object',
  fields: [
    {
      name: 'questionText',
      title: 'Question Text',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'answerText',
      title: 'Answer Text',
      type: 'text',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}

const tab = {
  name: 'tab',
  title: 'Tab',
  type: 'object',
  fields: [
    {
      name: 'tabName',
      title: 'Tab Name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'tabTitle',
      title: 'Tab Title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [question],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
}

export const faqPage = defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [tab],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'contactUsDescription',
      title: 'Contact Us Description',
      type: 'text',
      description: 'Description for the contact us section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactUsCta',
      title: 'Contact Us CTA',
      type: 'object',
      fields: [
        {
          name: 'displayText',
          title: 'Button Text',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'url',
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
        name: 'seo',
        title: 'SEO',
        type: 'seoType',
    }),
  ],
}) 