module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy('./src/assets');

	return {
		HTMLTemplateEngine: 'njk',
		pathPrefix: '/',
		dir: {
			input: 'src',
			includes: '_includes',
			layouts: '_includes/layouts'
		}
	};
};
