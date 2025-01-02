import { type SchemaTypeDefinition } from 'sanity'


import category from './category'
import courses from './courses'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courses, category],
}
