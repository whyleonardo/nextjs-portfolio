import { client } from 'services/sanityClient'
import { Project } from 'utils/@types/project'

export async function getProjects() {
	const projects: Project[] = await client.fetch(`*[_type == "project"]`)

	return projects
}
