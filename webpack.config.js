const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')   //生成html的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //生成一个单独的css文件

const base = require('./webpack.config.base')


module.exports = {
    ...base,
    devtool:'inline-source-map',   //这几行是为了使用webpack-dev-server
    devServer: {                    //这几行是为了使用webpack-dev-server
        contentBase:'./dist'
    },
    mode:'development',   //开发者模式 内容更多，还有一个用户的模式
  
    module:{   //下面加一个css文件
        rules:[
            ...base.module.rules,
            {
                test:/\.css$/i,   //正则表达式 选择css结尾的文件
                use:['style-loader','css-loader']   //后面一个把css文件读取到js文件里面   前面一个部署到html文件中
            }
        ]
    }
}

