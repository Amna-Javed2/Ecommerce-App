import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schema/product'
import { category } from '../schema/category'
import { heroImage } from '../schema/heroImage'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,heroImage],
}
