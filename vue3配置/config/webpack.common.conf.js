const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: './src/main.js',                           //需要打包的文件入口
    output: {
        path: path.resolve(__dirname, '../build'),    //打包输出的目录
        filename: 'js/bundle.js'                      //打包后的文件
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.jsx', '.vue', '.scss'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        esModule: false
                    }
                }, 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        esModule: false
                    }
                }, 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                },
                generator: {
                    filename: './assets/img/[hash][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './assets/font/[hash][ext][query]'
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //这个文件下的js不进行转换
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: "./src/index.html", //模板文件路径
            filename: 'index.html',              //生成文件的名称
            minify: {
                minimize: true,                  //是否打包为最小值
                removeAttributeQuotes: false,    //去除引号
                removeComments: true,            //去除注释
                collapseWhitespace: true,        //去除空格
                minifyCSS: true,                 //压缩html内的样式
                minifyJS: true,                  //压缩HTML内的js
                removeEmptyElements: false,      //清理内容为空的元素
            },
            hash: true                           //引入产出资源的时候加上哈希避免缓存
        }),
        new VueLoaderPlugin()
    ]
}