const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  //自动生成 html 文件
const TerserPlugin = require('terser-webpack-plugin')  // 压缩 js 代码，会删除注释、空格、换行符等
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin  // 分析打包后的文件，查看文件大小、依赖关系等信息
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  // 清理打包后的文件，避免文件过多

/** 
 * 配置 webpack 配置项
 */
module.exports = {
    mode:'development',  //development 开发模式，production 生产模式
    devtool: 'eval-cheap-module-source-map',  // 开发模式，方便查看打包后的源代码
    entry: './src/index.js',
    output: { 
    // filename: 'dist.js'  //打包后的文件名
    // []是占位符 placeholder 
        filename: "[name].[contenthash].js",  // 避免缓存，每次打包时，文件名会改变，浏览器会重新请求
        path: path.resolve(__dirname, 'dist')  //存放目录
    },
    resolve: {  
        alias: {  // 配置路径别名 (别名: 路径)
            'untils': path.resolve(__dirname, 'src/untils')
        }
    },
    optimization: {
        minimize: true,  // 开启压缩
        minimizer: [new TerserPlugin()]  
    },
    devServer: {  // 自动打开浏览器，方便查看打包后的文件
        static: './dist'
    },
    plugins: [  //配置插件
        new HtmlWebpackPlugin({
            title: '博客列表'
        }),
        new BundleAnalyzerPlugin(),
        // new CleanWebpackPlugin()  // 清理打包后的文件，避免文件过多
    ],
    module: {   //配置 loader 或者 自带的 type
        rules: [
            {
                test: /\.js$/i,   //正则表达式，$ 匹配结尾为 .js 的文件，i 忽略大小写
                exclude: /node_modules/,  //第三方库已经转义过了
                use:{           // 自动转义 js 代码，可以兼容低版本浏览器的 js 代码
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'] 
                        ],
                        plugins: [
                             [
                                'babel-plugin-polyfill-corejs3', {
                                // 对应旧版本的 useBuiltIns: 'usage'，只会引入使用到的 polyfill，减少打包后的文件大小
                                 'method': 'usage-global' 
                                }
                            ]  
                        ]
                    }
                },  
                type: 'javascript/auto'   //自动解析js文件
            },  
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']  //从右到左执行，从下往上执行
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg|webp)$/i,
                type: 'asset/resource'  
            }
               ]    
        }
}