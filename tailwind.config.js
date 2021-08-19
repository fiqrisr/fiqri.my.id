module.exports = {
	mode: 'jit',
	purge: ['_site/**/*.html', 'src/_includes/**/*.njk'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			mono: ['Roboto Mono', 'monospace']
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
