'use client'

import Link from 'next/link'
import ReactCountryFlag from 'react-country-flag'
import { clsx } from 'clsx'
import { getLocalesInfo } from 'utils/getLocalesInfo'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

const TranslateButton = () => {
	const pathname = usePathname()
	const { locales } = getLocalesInfo()

	return (
		<div className='flex space-x-2'>
			{locales.map(({ country, lang, isDefault }) =>
				<Link key={country} href={`/${lang}/${country}`}>
					<ReactCountryFlag
						style={{ width: '2.5rem', height: '2.5rem' }}
						countryCode={country}
						svg
						className={
							clsx(
								[
									'hover:grayscale-0 transition duration-300 grayscale',
									(isDefault && pathname == '/')
										? 'grayscale-0'
										: pathname?.includes(country) && 'grayscale-0'
								]
							)}
					/>
				</Link>
			)}
		</div>
	)
}

export default TranslateButton
