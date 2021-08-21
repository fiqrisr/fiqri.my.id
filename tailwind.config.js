module.exports = {
	mode: 'jit',
	purge: ['_site/**/*.html', 'src/_includes/**/*.njk', 'src/styles/**/*.css'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				mono: ['Roboto Mono', 'monospace']
			}
		},
		height: {
			'80vh': '80vh'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
