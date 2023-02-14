import Toggle from 'components/ToggleTheme'
import TranslateButton from 'components/TranslateButtons'
import { archerus } from 'app/[lang]/[country]/styles/fonts';

const Header = () => {
	return (
		<header className="flex items-center border-b-2 border-red-50 sm:h-14 md:h-20 bg-transparent w-full ">
			<Toggle />
			<TranslateButton />
		</header>
	)
}

export default Header
