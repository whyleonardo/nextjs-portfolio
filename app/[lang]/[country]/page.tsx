import { createClient } from "next-sanity"
import { Project } from "utils/@types/project"

// const client = createClient({
// 	projectId: "gvtrjxtp",
// 	dataset: "production",
// 	apiVersion: "2023-02-07",
// 	useCdn: false
// })


const Home = ({ params }: { params: { lang: string, country: string } }) => {
	// const projects: Project[] = await client.fetch(`*[_type == "project"]`)

	// const projectsSortedByMostRecent = projects.sort((a, b) => {
	// 	const date1 = new Date(b.dateWasCreated)
	// 	const date2 = new Date(a.dateWasCreated)

	// 	return date1.getTime() - date2.getTime()
	// })

	return (
		// <div>
		// 	{projectsSortedByMostRecent.map((project) => <p key={project._id}>{project.title}</p>)}
		// </div>
		<p>{JSON.stringify(params)}</p>
	)
}

export default Home
