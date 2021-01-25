const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')   //生成html的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //生成一个单独的css文件

const base = require('./webpack.config.base')



module.exports = {
    ...base,
    mode:'production',   
    plugins:[
        ...base.plugins,
            new MiniCssExtractPlugin({   //将css改成单独的文件,而不是直接放到页面文件里面
            filename:'[name].[contenthash].css',   //输出css文件的名字 哈希表 可用于更新文件
            chunkFilename:'[id].[contenthash].css',//输出css文件的名字 哈希表 可用于更新文件
            ignoreOrder:false,
        }),

    ],
    module:{   //下面加一个css文件
        rules:[
            ...base.module.rules,
            {
                test:/\.css$/i,   //正则表达式 选择css结尾的文件
                use:[
                    {
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath:'../',
                        // hmr:process.env.NODE_ENV === 'development'  //这个加了会报错  老师加没问题  可能是版本问题
                    }
                },
                'css-loader'
                ],
                //use:['style-loader','css-loader']   //后面一个把css文件读取到js文件里面   前面一个部署到html文件中
            }
        ]
    }
}

