'use client'

import Link from 'next/link'


const locales = [
	{
		lang: 'pt',
		country: 'br',
		icon: 'brasil'
	},
	{
		lang: 'en',
		country: 'us',
		icon: 'eua'
	}
]

const TranslateButton = ({ params }: { params: { lang: string, country: string } }) => {
	return (
		<>
			<div className="space-x-5 space-y-5">
				{locales.map(locale =>
					<Link key={locale.country} href='pt/br' className="border border-green-600">Brasil</Link>
				)

				}

				<Link href='en/us' className="border border-red-600">EUA</Link>
			</div>
		</>
	)
}

export default TranslateButton
