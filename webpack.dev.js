var merge = require("webpack-merge");
var common = require("./webpack.common.js");
var path = require("path");

module.exports = merge(common, {
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, "dist")
	}
});
