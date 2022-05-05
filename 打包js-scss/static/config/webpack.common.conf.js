const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let entry = require(path.resolve(__dirname, './entry.json'));
module.exports = {
    entry: entry,                           //需要打包的文件入口
    output: {
        path: path.resolve(__dirname, '../js'),    //打包输出的目录
        publicPath: '/static/',
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.jsx', '.scss'],
        alias: {
            '@': path.resolve(__dirname, '../')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        esModule: false
                    }
                }, 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        esModule: false
                    }
                }, 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //这个文件下的js不进行转换
                use: 'babel-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 30,
                    minChunks: 2,
                    priority: 1, //优先级
                }

            }
        },
    }
}
