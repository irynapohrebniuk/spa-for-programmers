const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: 'development',
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
    },
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'SPA for Programmers'}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            AOS: 'aos'
        })
    ],
    module: {
        rules: [
            
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 18192,
                            name: 'img/[hash]-[name].[ext]'
                        },
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ],
            },
            // xml loader
            {
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              }
        ],
    },
};