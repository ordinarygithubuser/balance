const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

const ROOT_DIR = path.resolve(__dirname, '../');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'sourcemaps',
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.css$/,
		        use: 'css-loader'
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});