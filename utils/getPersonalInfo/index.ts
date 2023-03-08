import { client } from 'services/sanityClient'
import { PersonalInfo } from 'utils/@types/personalInfo'

export async function getPersonalInfo() {
	const data: PersonalInfo[] = await client.fetch(`*[_type == "personalInfo"]`)

	const personalInfo = data.at(0)

	return personalInfo
}
