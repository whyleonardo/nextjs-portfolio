import { ValidLocale, getLocalePartsFrom, getTranslator, locales } from 'i18n'

const Home = async ({ params }: { params: { lang: string, country: string } }) => {

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
		</div>
	)
}

export default Home

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }))
}
