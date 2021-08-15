module.exports = (eleventyConfig) => {
	return {
		HTMLTemplateEngine: "njk",
		pathPrefix: "/",
		dir: {
			input: "src",
			includes: "_includes",
			layouts: "_includes/layouts",
		},
	};
};
