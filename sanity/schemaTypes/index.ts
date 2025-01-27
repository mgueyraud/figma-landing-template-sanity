import { type SchemaTypeDefinition } from 'sanity'
import { sponsor, sponsorCategory } from './sponsor'
import { speaker } from './speaker'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sponsor, sponsorCategory, speaker],
}
