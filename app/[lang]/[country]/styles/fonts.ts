import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

export const inter = Inter({
	subsets: ['latin'],
	fallback: ['sans-serif'],
	variable: '--font-inter',
})

export const archerus = localFont({
	variable: '--font-archerus',
	src: './fonts/acherus_militant_light.otf',
})
