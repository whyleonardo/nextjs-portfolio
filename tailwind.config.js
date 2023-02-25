/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./app/[lang]/[country]/**/*.{html,jsx,tsx}',
		'./components/**/*.{html,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-archerus)']
			},
			keyframes: {
				'img-profile': {
					'0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
					'50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
					'100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
				}
			},
			animation: {
				'profile': 'img-profile 8s ease-in-out infinite 1s',
			}
		},
	},
	plugins: []
}
