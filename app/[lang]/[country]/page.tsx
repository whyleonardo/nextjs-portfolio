import { ValidLocale, getLocalePartsFrom, getTranslator, locales } from 'i18n'
import HomeSection from '@/components/UI/Sections/Home'
import type { Metadata } from 'next/types'
import { ParamsProps } from 'utils/@types/params'
import { getProjects } from 'utils/getProjects'
import { Project } from 'utils/@types/project'

export const metadata: Metadata = {
	title: 'Christian | Portfólio',
	description: 'Welcome to my Website',
}

export default async function Home({ params }: ParamsProps) {
	const translate = await getTranslator(
		`${params.lang}-${params.country.toUpperCase()}` as ValidLocale,
	)

	const projects: Project = await getProjects()

	console.log(projects)

	return (
		<div className="flex">
			{/* <h1>{translate('welcome.helloWorld')}</h1>
			<h2>
				{translate('welcome.happyYear', {
					year: new Date().getFullYear()
				})}
			</h2> */}

			<HomeSection />
		</div>
	)
}

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }))
}
