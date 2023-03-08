import { ValidLocale, getLocalePartsFrom, getTranslator, locales } from 'i18n'
import HomeSection from '@/components/UI/Sections/Home'
import type { Metadata } from 'next/types'
import { ParamsProps } from 'utils/@types/params'
// import { getProjects } from 'utils/getProjects'
import { getPersonalInfo } from 'utils/getPersonalInfo'

export const metadata: Metadata = {
	title: 'Christian | Portfólio',
	description: 'Welcome to my Website',
}

export default async function Home({ params }: ParamsProps) {
	const translate = await getTranslator(
		`${params.lang}-${params.country.toUpperCase()}` as ValidLocale,
	)

	const personalInfo = await getPersonalInfo()
	// const projects = await getProjects()

	return (
		<div className="flex flex-col justify-center container">

			{/* @ts-ignore */}
			<HomeSection personalInfo={personalInfo} translate={translate} />
		</div>
	)
}

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }))
}
