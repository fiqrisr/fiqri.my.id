const pluginSEO = require('eleventy-plugin-seo');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(pluginSEO, require('./src/_data/seo.json'));
	eleventyConfig.addPlugin(lazyImagesPlugin);

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
