const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
   
module.exports = {
  mode: "development",
  // devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    // 去除未使用的导出内容
    usedExports: true,
    minimizer: [
      new TerserPlugin()
    ]
  },
};