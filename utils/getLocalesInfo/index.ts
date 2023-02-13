type Locales = {
	lang: string
	country: string
	isDefault: boolean
}

const locales: Locales[] = [
	{
		lang: 'en',
		country: 'us',
		isDefault: false
	},
	{
		lang: 'pt',
		country: 'br',
		isDefault: true
	},
	{
		lang: 'es',
		country: 'es',
		isDefault: false
	}
]

export const getLocalesInfo = () => {
	const countries = locales.map(({country}) => country)
	const languages = locales.map(({ lang }) => lang)
	
	return {
		locales,
		countries,
		languages
	}
}
