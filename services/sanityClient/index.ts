import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
	? process.env.NEXT_PUBLIC_PROJECT_ID
	: ''

const clientConfig = {
	projectId,
	dataset: 'production',
	apiVersion: '2023-03-07',
	useCdn: false,
}

export const client = createClient(clientConfig)

export const sanityImageBuilder = imageUrlBuilder(clientConfig)
