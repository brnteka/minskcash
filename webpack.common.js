var path = require("path");
var VueLoaderPlugin = require("vue-loader/lib/plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src/index.js"),
	output: {
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: "vue-loader"
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: "babel-loader"
			},
			{
				test: /\.pug$/,
				oneOf: [
					{
						include: [path.resolve(__dirname, "src/pug")],
						use: ["pug-loader"]
					},
					{
						exclude: [path.resolve(__dirname, "src/pug")],
						use: ["pug-plain-loader"]
					}
				]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "images"
							//esModule: false
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "fonts"
						}
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + "/src/pug/index.pug"
		})
	]
};
