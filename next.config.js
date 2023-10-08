/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
	// webpack: (config) => {
	// 	// Merge the custom Webpack configuration
	// 	config.resolve.alias = {
	// 		...config.resolve.alias,
	// 		"flowbite-react": path.resolve(__dirname, "dummy-flowbite-react.js"),
	// 	}
	// 	return config
	// },
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.md$/,
	// 			use: "markdown-loader",
	// 		},
	// 	],
	// 	resolve: {
	// 		alias: {
	// 			// Add an alias for flowbite-react to resolve to a dummy file
	// 			"flowbite-react": path.resolve(__dirname, "dummy-flowbite-react.js"),
	// 		},
	// 	},
	// },
}

module.exports = nextConfig
