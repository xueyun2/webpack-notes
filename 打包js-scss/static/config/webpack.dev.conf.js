const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    devtool: "eval-cheap-module-source-map",
    output: {
        filename: 'js/[name]/[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]/[name].css' //导出路径
        })
    ],
    //本地服务
    devServer: {
        allowedHosts: ['all'],
        static: [
            {
                directory: path.join(__dirname, '../../view')
            }, {
                directory: path.join(__dirname, '../../')
            }
        ],
        hot: true,
        open: false,
        port: 9990,
    }
}