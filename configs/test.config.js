const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// mode: 'development',
	entry: path.resolve(__dirname, '../apps/index.js'),
	output: {
		path: path.resolve(__dirname, '../public'),
		filename: 'bundle.js'
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
				test: /\.html&/i,
				// loader: 'html-loader'
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}
				]
			}, // html
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
		static: {
			directory: path.resolve(__dirname, '../public'),
		},
		open: true,
		compress: true,
		host: 'localhost',
		hot: true,
		port: 9000,
		client: {
			progress: true,
		}
		// devMiddleware: {
		// 	publicPath: '/',
		// },
		// static: {
		// 	directory: path.resolve(__dirname, 'dist')
		// },
		// port: 3000,
		// open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			// template: './index.html'
			// template: path.resolve(__dirname, '../dist/index.html'),
			template: './index.html',
		})
	]
}

// module.exports = {
// 	mode: 'development',
// 	entry: './apps/index.js',
// 	output: {
// 		// path: path.resolve(__dirname, 'build'),
// 		// filename: 'js/[name].js',
// 		// publicPath: './',
// 		filename: 'main.js',
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.(js|jsx|ts|tsx)$/,
// 				exclude: /node_modules/,
// 				use: {
// 					loader: 'babel-loader',
// 					options: {
// 						babelrc: false,
// 						presets: ['@babel/preset-env'],
// 					}
// 				},
// 			},
// 			{
// 				test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
// 				loader: 'url-loader'
// 			},
// 			{
// 				test: /\/(sa|sc|c)ss$/,
// 				user: [
// 					'style-loader',
// 					'css-loader',
// 					'sass-loader'
// 				]
// 			}
// 		]
// 	},
// 	plugins: [
// 		/*
// 		new webpack.DefinePlugin({
// 		})
// 		*/
// 		new HtmlWebpackPlugin({
// 			template: 'index.html'
// 		})
// 	]
// }