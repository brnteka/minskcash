// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
	// Specify the paths to all of the template files in your project
	content: [
		"./src/**/*.pug",
		"./src/**/*.vue",
		"./src/**/*.jsx"
		// etc.
	],

	// Include any special characters you're using in this regular expression
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const autoprefixer = require("autoprefixer");

module.exports = {
	plugins: [
		require("postcss-import"),
		require("tailwindcss"),
		require("postcss-nested"),
		...(process.env.NODE_ENV === "production"
			? [purgecss, autoprefixer]
			: [])
	]
};
