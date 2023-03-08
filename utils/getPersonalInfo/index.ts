import { client } from 'services/sanityClient'

export async function getPersonalInfo() {
	const personalInfo = await client.fetch(`*[_type == "personalInfo"]`)

	return personalInfo
}
