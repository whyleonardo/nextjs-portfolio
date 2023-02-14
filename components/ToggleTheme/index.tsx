'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'

const ToggleTheme = () => {
	const { theme, setTheme } = useTheme()

	const handleChangeTheme = () => {
		if (theme === 'light') {
			return setTheme('dark')
		}
		return setTheme('light')
	}

	return (
		<button
			onClick={handleChangeTheme}
			type="button"
			className="opacity-75 p-6 text-xl grayscale hover:grayscale-0"
		>
			{theme === 'light'
				?
				<MoonIcon className="h-6 w-6 transition duration-300 ease-in-out  hover:text-yellow-300" />
				:
				<SunIcon className="h-6 w-6 transition duration-300 ease-in-out hover:text-yellow-300" />
			}
		</button>
	)
}
export default ToggleTheme
