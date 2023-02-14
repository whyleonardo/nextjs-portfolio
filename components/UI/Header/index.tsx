import { ValidLocale, getLocalePartsFrom, getTranslator, locales } from 'i18n'
import { ParamsProps } from 'utils/@types/params'
import ToggleTheme from 'components/ToggleTheme'
import TranslateButton from 'components/TranslateButtons'

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

const Header = async ({ params }: ParamsProps) => {

	const translate = await getTranslator(
		`${params.lang}-${params.country.toUpperCase()}` as ValidLocale
	)

	return (
		<header className='flex items-center justify-between m:h-16 md:h-20 bg-transparent'>

			<span className=' text-2xl'>
				CL
			</span>

			<div className='hidden md:flex items-center'>
				<nav className=''>
					{sections.map(({ name, slug }) =>
						<a
							key={name}
							href={`#${slug}`}
							className='font-bold'
						>
							{translate(`navLink.${slug}`)}
						</a>
					)}
				</nav>

				<div className='flex items-center border border-red-500'>
					<TranslateButton />
					<ToggleTheme />
				</div>
			</div>

		</header>
	)
}

export default Header

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }))
}
