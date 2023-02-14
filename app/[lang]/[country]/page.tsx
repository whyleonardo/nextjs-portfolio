import { ValidLocale, getLocalePartsFrom, getTranslator, locales } from 'i18n'
import { ParamsProps } from 'utils/@types/params'

const Home = async ({ params }: ParamsProps) => {

	const translate = await getTranslator(
		`${params.lang}-${params.country.toUpperCase()}` as ValidLocale
	)

	return (
		<div className='flex flex-col justify-between border border-red-500 h-[150vh]'>
			<h1>{translate('welcome.helloWorld')}</h1>
			<h2>
				{translate('welcome.happyYear', {
					year: new Date().getFullYear()
				})}
			</h2>

			<div id='projects' className=''>
				asjdiqhuwdqw

			</div>
		</div>
	)
}

export default Home

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }))
}
