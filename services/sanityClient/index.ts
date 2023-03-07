import { createClient } from 'next-sanity'

export const client = createClient({
	projectId: 'gvtrjxtp',
	dataset: 'production',
	apiVersion: '2023-03-07',
	useCdn: false,
})
