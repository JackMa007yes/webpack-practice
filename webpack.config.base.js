const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')   //生成html的插件
const { Template } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //生成一个单独的css文件


module.exports = {
    
    entry:'./src/index.js',   //入口文件
    output:{filename:'[name].[contenthash].js'},  //输出js文件的名字 哈希表 可用于更新文件
    plugins:[ //插件
        new HtmlWebpackPlugin({
            title:'shishikan',  //生成html的title
            template:'src/assets/index.html'  //生成html的模板
        }),
    ],
}

