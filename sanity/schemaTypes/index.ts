import { type SchemaTypeDefinition } from 'sanity'
import { sponsor, sponsorCategory } from './sponsor'
import { speaker } from './speaker'
import { footer } from './footer'
import { navbar } from './navbar'
import { seoType } from './seo'
import { home } from './home'
import { sponsorsPage } from './sponsorsPage'
import { speakersPage } from './speakersPage'
import { ticket } from './ticket'
import { ticketsPage } from './ticketsPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    sponsor, 
    sponsorCategory, 
    speaker, 
    footer, 
    navbar, 
    seoType, 
    home, 
    sponsorsPage, 
    speakersPage, 
    ticket,
    ticketsPage
  ],
}
