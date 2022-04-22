module.exports = {
    mode: 'development',
    devtool: "eval-cheap-module-source-map",
    //本地服务
    devServer: {
        hot: true,
        open: false,
        port: 9990,
    }
}