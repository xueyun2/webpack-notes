const path = require('path');
module.exports = {
    mode: 'development',
    devtool: "eval-cheap-module-source-map",
    //本地服务
    devServer: {
        allowedHosts: ['all'],
        static: [
            {
                directory: path.join(__dirname, '../js')
            },
            {
                directory: path.join(__dirname, '../css')
            },
            {
                directory: path.join(__dirname, '../../../../app')
            }
        ],
        hot: true,
        open: false,
        port: 9990,
    }
}