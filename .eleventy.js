module.exports = function(config) {
	config.setDataDeepMerge(true)
	return {
		dir: {
			input: "src",
			includes: "_components",
		},
		htmlTemplateEngine: "njk",
	};
};
