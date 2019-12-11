var webpack = require("webpack");
var merge = require("webpack-merge");
var common = require("./webpack.common.js");
var TerserJSPlugin = require("terser-webpack-plugin");
var path = require("path");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		publicPath: "/belaruscash/"
	},
	optimization: {
		splitChunks: {
			chunks: "all"
		},
		minimizer: [new TerserJSPlugin()]
	},
	plugins: []
});
