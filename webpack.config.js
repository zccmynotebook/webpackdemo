const path=require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");
const CustomPlugin = require('./plugin/CustomPlugin')
module.exports = {
    //mode: 'development',
    //mode:'production',
    mode:"none",
    entry: './src/treeshake.js',
    // entry:{
    //     home: './src/index.js',
    //     about: './src/about.js'
    // },
    output: {
        path: path.resolve(__dirname,'dist/'),
        //library: 'abc'
    },
    optimization: {
        usedExports: true,
        splitChunks: {
            cacheGroups: {
                reuse:{
                    chunks: 'initial',
                    minSize: 10,
                    minChunks:2,
                }
            }
        }
    },
    resolveLoader:{
        modules: [
            path.resolve(__dirname, './node_modules'),
            path.resolve(__dirname, './loader')
        ]
    },
    module: {
        noParse: /moment/,
        // rules: [
        //     {
        //         test: /\.js$/,
        //         exclude: path.resolve(__dirname, './node_modules'),
        //         //loader: 'babel-loader'
        //         //loader按照从右到左,从下到上的顺序执行
        //         use: ['loader1', 'loader2', 'loader3']
        //     }
        // ]
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: {
                    loader: 'loader1'
                },
                //enforce:'pre'
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: {
                    loader: 'loader2'
                }
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: {
                    loader: 'loader3'
                },
                //enforce: 'post'
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: {
                    loader: 'css-loader'
                }
            },
        ]
    },
    plugins:[
        new CustomPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true,
        
        }),
    ],
     

}