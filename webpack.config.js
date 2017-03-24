/*

cnpm init
cnpm install webpack --save-dev
cnpm install css-loader style-loader --save-dev
cnpm install html-webpack-plugin --save-dev

*/
//var hemlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
// 	entry:['./pro/js/jquery-2.1.1.min.js','./pro/js/phaser.js','./pro/js/game.js'],//定义入口文件

// 	output:{ 
		
// 		path:'/pro/dist',//定义打包后路径

// 		filename:'a-[chunkhash].js',//定义打包后文件名
// 	},

// 	// plugins:[
// 	//   new htmlWebpackPlugin()
// 	// ]
// }


const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './pro/js/game.js',
  output: {
    path: path.resolve(__dirname, 'pro/dist'),
     //path: '/pro/dist',
    filename: 'my-first-webpack.bundle.js'
  },
  // module: {
  //   rules: [
  //     {test: /\.(js|jsx)$/, use: 'babel-loader'}
  //   ]
  // },
  plugins: [
  //  new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './pro/index.html'})
  ]
};

module.exports = config;