/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./app/[lang]/[country]/**/*.{html,jsx,tsx}",
		"./components/**/*.{html,jsx,tsx}"
	],
  theme: {
 		extend: {
      fontFamily: {
        sans: ['var(--font-archerus)']
      },
    },
  },
  plugins: [],
}
