import { createClient } from "next-sanity"

const client = createClient({
	projectId: "gvtrjxtp",
	dataset: "production",
	apiVersion: "2023-02-07",
	useCdn: false
})

type Project = {
	_id: string
	cover: { _type: string, asset: [Object] }
	dateWasCreated: string
	github: string
	isCompleted: boolean
	link: string
	title: string
}

const Home = async () => {
	const projects: Project[] = await client.fetch(`*[_type == "project"]`)

	const projectsSortedByMostRecent = projects.sort((a, b) => {
		const date1 = new Date(b.dateWasCreated)
		const date2 = new Date(a.dateWasCreated)

		return date1.getTime() - date2.getTime()
	})

	return (
		<div>
			{projectsSortedByMostRecent.map((project) => <p key={project._id}>{project.title}</p>)}
		</div>
	)
}

export default Home
