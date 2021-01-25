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
    module:{
        rules:[  
            {  //加载图片
                test:/\.(png|jpg|svg|gif)$/,
                use:['file-loader']   //把文件变成文件路径 可以是其他格式的文件
            },
            { //加载stylus
                test:/\.styl$/,
                use:['style-loader','css-loader',
                {loader:'stylus-loader'}
            ]
            },
            {    //加载less
                test:/\.less$/,
                use:['style-loader','css-loader',
                {loader:'less-loader'}
            ]
            },
            {   //以下为加载scss
                test:/\.scss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'sass-loader',
                        options:{implementation:require('dart-sass')}
                    }
                   
                ]
            }
        ]
    }
}

