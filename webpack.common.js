const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
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
            
            // {
            //     test: /\.(png|svg|jpe?g|gif)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8096,
            //                 name: 'img/[name].[ext]'
            //             },
            //         },
            //     ]
            // },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                   'file-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        },
                    },
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