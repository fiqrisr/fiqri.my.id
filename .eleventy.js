const pluginSEO = require('eleventy-plugin-seo');

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(pluginSEO, require('./src/_data/seo.json'));

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
