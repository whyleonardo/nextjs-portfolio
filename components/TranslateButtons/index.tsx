'use client'

import { BR, US } from 'country-flag-icons/react/3x2'
import Link from 'next/link'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'

const TranslateButton = () => {
	const pathname = usePathname()

	return (
		<div className='flex space-x-2'>
			<Link href='/'>
				<BR
					title="Brazil"
					className={clsx('w-14 h-14 hover:grayscale-0 transition duration-300', pathname == '/en/us' && 'grayscale')}
				/>
			</Link>

			<Link href='/en/us'>
				<US
					title="United States"
					className={clsx('w-14 h-14 hover:grayscale-0 transition duration-300', pathname != '/en/us' && 'grayscale')}
				/>
			</Link>

		</div>
	)
}

export default TranslateButton
