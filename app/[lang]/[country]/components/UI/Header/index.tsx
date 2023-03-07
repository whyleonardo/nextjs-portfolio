import { CodeBracketIcon } from '@heroicons/react/24/solid'
import NavLinks from '../../Buttons/NavLinks'
import NavMenu from '../NavMenu'
import { ParamsProps } from 'utils/@types/params'

const Header = ({ params }: ParamsProps) => {
	return (
		<header className="flex w-full px-4 h-16 md:h-20 bg-transparent">
			<div className="flex items-center justify-between mx-auto w-full max-w-7xl">
				<span className="text-2xl">
					<CodeBracketIcon className="w-8 h-8 dark:text-white" />
				</span>

				<NavMenu>
					{/* @ts-expect-error Async Server Component */}
					<NavLinks params={params} />
				</NavMenu>
			</div>
		</header>
	)
}

export default Header
