const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join('./dist'),
        // Enable HTML5 History support
        historyApiFallback: true,
        // Logging level for dev server
        clientLogLevel: 'trace',
        // Enable code hot replacement
        hot: true,
        // Open default browser after server start
        open: true,
        // Specify dev server port
        port: 8080
    }
});