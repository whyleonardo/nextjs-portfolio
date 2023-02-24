import './styles/globals.css'
import Header from './components/UI/Header'
import { Providers } from './providers'
import { inter } from './styles/fonts'

export default function RootLayout({
	params,
	children
}: {
	children: React.ReactNode,
	params: { country: string, lang: string }
}) {

	return (
		<html className='scroll-smooth'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={`dark:bg-black/90 bg-white text-black dark:text-white ${inter.className}`}>
				<Providers>
					<Header params={params} />
					{children}
				</Providers>
			</body>

		</html>
	)
}
