/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				primary: '#101010e6'
			},
			padding: {
				normal: '15px'
			},
			gap: {
				normal: '15px'
			},
			boxShadow: {
				dark: '0px 1px 2px 0px rgba(255,255,255,0.14)'
			},
			gridTemplateColumns: {
				projectCard: '1fr 65%'
			}
		}
	},
	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()]
};
