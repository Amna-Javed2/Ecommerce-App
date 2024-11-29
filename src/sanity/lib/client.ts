import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
import  imageUrlBuilder  from '@sanity/image-url'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source:any){
  return builder.image(source);
}