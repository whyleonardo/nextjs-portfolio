import { client } from 'services/sanityClient'

export async function getProjects() {
	const projects = await client.fetch(`*[_type == "project"]`)

	return projects
}
