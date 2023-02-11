import Toggle from 'components/ToggleTheme'
import TranslateButton from 'components/TranslateButtons'

const Header = () => {
	return (
		<header className="flex items-center bg-transparent w-full h-20">
			<Toggle />
			<TranslateButton />
		</header>
	)
}

export default Header
