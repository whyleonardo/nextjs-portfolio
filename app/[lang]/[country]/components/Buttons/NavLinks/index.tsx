import { ValidLocale, getLocalePartsFrom, getTranslator, locales } from 'i18n'
import { ParamsProps } from 'utils/@types/params'

const sections = [
	{
		name: 'Home',
		slug: 'home'
	},
	{
		name: 'Sobre Mim',
		slug: 'about'
	},
	{
		name: 'Contato',
		slug: 'contact'
	},
	{
		name: 'Projetos',
		slug: 'projects'
	}
]

const NavLinks = async ({ params }: ParamsProps) => {
	const translate = await getTranslator(
		`${params.lang}-${params.country.toUpperCase()}` as ValidLocale
	)
	return (
		<>
			{sections.map(({ name, slug }) =>
				<a
					key={name}
					href={`#${slug}`}
					className='font-light inline-block text-3xl md:text-base hover:dark:text-white/70 hover:text-black/60 transition duration-300'
				>
					{translate(`navLink.${slug}`)}
				</a>
			)}
		</>
	)
}

export default NavLinks

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }))
}
