var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')   //生成一个html标签
const { Template } = require('webpack')


module.exports = {
    mode:'development',   //开发者模式 内容更多，还有一个用户的模式
    devtool:'inline-source-map',   //这几行是为了使用webpack-dev-server
    devServer: {                    //这几行是为了使用webpack-dev-server
        contentBase:'./dist'
    },
    entry:'./src/index.js',   //输入的文件  一个js文件
    output:{filename:'[name].[contenthash].js'},  //输出js文件的名字 哈希表 可用于更新文件
    plugins:[new HtmlWebpackPlugin({
        title:'shishikan',  //生成html的title
        template:'src/assets/index.html'  //生成html的模板
    })],
    module:{   //下面加一个css文件
        rules:[
            {
                test:/\.css$/i,   //正则表达式 选择css结尾的文件
                use:['style-loader','css-loader']   //后面一个把css文件读取到js文件里面   前面一个部署到html文件中
            }
        ]
    }
}

