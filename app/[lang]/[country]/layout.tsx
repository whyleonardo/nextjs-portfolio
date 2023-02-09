import './styles/globals.css'
import Header from 'components/UI/Header'
import { Inter } from '@next/font/google'
import Providers from './providers'
import Toggle from 'components/ToggleTheme'
const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<html>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={`dark:bg-black light:bg-white light:text-black dark:text-white ${inter.className}`}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>

		</html>
	)
}

export default RootLayout
