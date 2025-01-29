import { defineField, defineType } from 'sanity'
import { BillIcon } from '@sanity/icons'


export const ticket = defineType({
  name: 'ticket',
  title: 'Ticket',
  type: 'document',
  icon: BillIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Ticket Title',
      type: 'string',
      description: 'e.g., "Single in person ticket", "Virtual"',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of what the ticket includes',
    }),
    defineField({
      name: 'currentPrice',
      title: 'Current Price',
      type: 'number',
      description: 'Current ticket price (0 for free tickets)',
      validation: rule => rule.required().min(0),
    }),
    defineField({
      name: 'hasDiscount',
      title: 'Has Discount',
      type: 'boolean',
      description: 'Enable to show original price and discount message',
      initialValue: false,
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      description: 'Original price before discount',
      hidden: ({ document }) => !document?.hasDiscount,
      validation: rule => rule.min(0),
    }),
    defineField({
      name: 'priceSubtext',
      title: 'Price Subtext',
      type: 'string',
      description: 'Text shown below the price (e.g., "Early bird (50% off) while supplies last", "per attendee")',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      currentPrice: 'currentPrice',
      hasDiscount: 'hasDiscount',
      originalPrice: 'originalPrice',
    },
    prepare({ title, currentPrice, hasDiscount, originalPrice }) {
      return {
        title,
        subtitle: hasDiscount 
          ? `${originalPrice} → ${currentPrice}`
          : currentPrice === 0 
            ? 'Free' 
            : `$${currentPrice}`,
      }
    }
  }
}) 