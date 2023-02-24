import { ValidLocale, getLocalePartsFrom, getTranslator, locales } from 'i18n'
import { ParamsProps } from 'utils/@types/params'

export default async function Home({ params }: ParamsProps) {

	const translate = await getTranslator(
		`${params.lang}-${params.country.toUpperCase()}` as ValidLocale
	)

	return (
		<div className='flex'>
			<h1>{translate('welcome.helloWorld')}</h1>
			<h2>
				{translate('welcome.happyYear', {
					year: new Date().getFullYear()
				})}
			</h2>
		</div>
	)
}

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }))
}
