var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // entry: './index.js',
  entry: path.join(__dirname, '../apps/index.js'),
  output: {
	filename: 'bundle.js',
	path: path.join(__dirname, '../dist'),
	publicPath: '/',
  },
  module: {
	  rules: [
		  {
			  test: /\.(js|jsx|ts|tsx)$/,
			  exclude: /node_modules/,
			  use: {
				  loader: 'babel-loader',
			  },
		  }, // js
		  {
			  test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
			  loader: 'url-loader'
		  }, // asset
		  {
			  test: /\/(sa|sc|c)ss$/,
			  use: [
				  'style-loader',
				  'css-loader',
				  'sass-loader'
			  ]
		  } // style
	  ]
  },
  devServer: {
	open: true,
	port: 9000,
	historyApiFallback: true,
	client: {
		progress: true,
	}
  },
  plugins: [
	new HtmlWebpackPlugin({
	  // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
	  template: 'index.html',
	}),
  ],
};