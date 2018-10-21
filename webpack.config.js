const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
	devServer:{
		contentBase:path.join(__dirname,'dist'),
		host:'0.0.0.0',
		port:8000,
		overlay:{
			errors:true,
		},
		hot:true
		// inline:true
	},
	entry:{
		index:path.resolve('src','index.js'),
	},
	output:{
		path:path.resolve('dist'),
		filename:'[name].bundle.js',
	},
	mode:'development',
	module:{
		rules:[
			{
				test:/\.vue$/, 
				use:'vue-loader'
			},
			{
				test:/\.jsx$/,
				exclude:[
					path.resolve('node_modules')
				],
				use:'babel-loader'
			},
			{
				test:/\.(le|c)ss$/, 
				exclude:[
					path.resolve('node_modules')
				],
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'},
					{loader:'less-loader'},
					{
						loader:'postcss-loader',
						options:{
							plugins:[
								require("autoprefixer")
							]
						}
					}
				]
			},
			{
				test:/\.(gif|jpg|jpeg|png|svg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:1024,
							name:'[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins:[
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}













