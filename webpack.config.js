// https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  	entry: './public/javascripts/script.js',
  	output: {
    	path: path.resolve(__dirname, 'public', 'dist'),
    	filename: 'app.bundle.js'
  	},

  	module: {
    	rules: [
			{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
			},
			{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            }
    	]
	},

	plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
	  
  	mode: 'development'
};