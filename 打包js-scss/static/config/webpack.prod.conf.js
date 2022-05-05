const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'production',
    devtool: "source-map",                            //开启错误代码定位
    output: {
        filename: '../js/[name]/[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name]/[name].css' //导出路径
        })
    ]
}