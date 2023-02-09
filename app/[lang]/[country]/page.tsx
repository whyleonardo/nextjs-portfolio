import { ValidLocale, getLocalePartsFrom, getTranslator, locales } from 'i18n'
import { Project } from 'utils/@types/project'
import TranslateButton from 'components/TranslateButtons'
import { createClient } from 'next-sanity'
// const client = createClient({
// 	projectId: "gvtrjxtp",
// 	dataset: "production",
// 	apiVersion: "2023-02-07",
// 	useCdn: false
// })


const Home = async ({ params }: { params: { lang: string, country: string } }) => {
	// const projects: Project[] = await client.fetch(`*[_type == "project"]`)

	// const projectsSortedByMostRecent = projects.sort((a, b) => {
	// 	const date1 = new Date(b.dateWasCreated)
	// 	const date2 = new Date(a.dateWasCreated)

	// 	return date1.getTime() - date2.getTime()
	// })


	const translate = await getTranslator(
		`${params.lang}-${params.country.toUpperCase()}` as ValidLocale
	)

	return (
		<div>
			<h1>{translate('welcome.helloWorld')}</h1>
			<h2>
				{translate('welcome.happyYear', {
					year: new Date().getFullYear()
				})}
			</h2>


			<TranslateButton params={params} />
		</div>
	)
}

export default Home

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }))
}
