var path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname),
    SRC_PATH = path.resolve(ROOT_PATH, 'src'),
    DIST_PATH = path.resolve(ROOT_PATH, 'dist'),
    LIBS_PATH = path.resolve(ROOT_PATH, 'libs'),
    TEM_PATH = path.resolve(LIBS_PATH, 'template');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.resolve(SRC_PATH, 'index.jsx'),
        vendors: ['es5-shim', 'es5-shim/es5-sham', 'react', 'react-dom']
    },
    output: {
        path: DIST_PATH,
        publicPath: '../',
        filename: 'js/[name]-[hash:8].js'
    },
    module: {
        preLoader: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'eslint',
                include: SRC_PATH
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel',
                include: SRC_PATH
            }, {
                test: /\.(svg|gif|png|jpg)$/,
                loader: 'url-loader?limit=(1024*8)&name=img/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(swf|mp4|ogv|webm)$/,
                loader: 'file-loader?name=video/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(mp3|ogg|wav|m4a)$/,
                loader: 'file-loader?name=audio/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(woff|eot|ttf)$/,
                loader: 'file-loader?name=font/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
                include: SRC_PATH
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    externals: {
        zepto: '$',
        jquery: '$'
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),*/
        new CleanWebpackPlugin([DIST_PATH], {
            root: '',
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            $: 'zepto' || 'jquery',
            zepto: 'zepto',
            jQuery: 'jquery',
            'window.zepto': 'zepto',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin("css/[name]-[hash:8].css"),
        new webpack.optimize.CommonsChunkPlugin({
            filename: "js/[name]-[hash:8].js",
            name: "vendors"
        }),
        new HtmlwebpackPlugin({
            title: '官方正版授权_《十万个冷笑话番剧版》手游官方网站_蓝港互动',
            keywords: '十万，十万冷，十万个冷笑话番剧版，十万个冷笑话阅读，十万个冷笑话最新版本，十万个冷笑话番剧版手游，十冷番剧版官方论坛，十万个冷笑话（官方手游），十万个冷笑话最新手游，十万个冷笑话手游版本，十万个冷笑话游戏，十万个冷笑话蓝港版下载',
            description: '《十万个冷笑话番剧版》手游，携百分百全新剧情重磅回归！游戏在延续经典卡牌的基础上新增了许多新奇玩法，玩家可以在游戏中化身无名少年，开启属于你的十冷大乱斗。是与十冷CP共同上阵畅爽杀敌，还是专心务农烹饪种菜做一个新时代的开山怪，全凭你做主！呆毛啵起，元槽弹就位，用你的吐槽能量拯救这个世界吧！',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['index', 'vendors'],
            filename: 'html/index.html',
            inject: 'body'
        })
    ]
};