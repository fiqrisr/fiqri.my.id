const pluginSEO = require('eleventy-plugin-seo');
const Image = require('@11ty/eleventy-img');

const imageShortCode = async (src, alt, sizes) => {
	let metadata = await Image(src, {
		widths: [480, 640, null],
		urlPath: './assets/images',
		outputDir: './_site/assets/images'
	});

	let imageAttributes = {
		alt,
		sizes,
		class: 'rounded-lg',
		loading: 'lazy',
		decoding: 'async'
	};

	return Image.generateHTML(metadata, imageAttributes);
};

module.exports = (eleventyConfig) => {
	eleventyConfig.addNunjucksAsyncShortcode('image', imageShortCode);

	eleventyConfig.addPlugin(pluginSEO, require('./src/_data/seo.json'));

	eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addPassthroughCopy('./src/robots.txt');
	eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

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
