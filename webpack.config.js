var path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname),
    SRC_PATH = path.resolve(ROOT_PATH, 'src'),
    DIST_PATH = path.resolve(ROOT_PATH, 'dist'),
    LIBS_PATH = path.resolve(ROOT_PATH, 'libs'),
    TEM_PATH = path.resolve(LIBS_PATH, 'template');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: path.resolve(SRC_PATH, 'index.jsx')
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js'
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
                test: /\.(svg|gif|png|jpg|swf|mp4|mp3|m4a|otf|svg|eot|ttf|woff)$/,
                loader: 'file-loader?name=[name].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'sass'],
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
        new webpack.ProvidePlugin({
            $: 'zepto' || 'jquery',
            zepto: 'zepto',
            jQuery: 'jquery',
            'window.zepto': 'zepto',
            'window.jQuery': 'jquery'
        }),
        new HtmlwebpackPlugin({
            title: 'wiki',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['index'],
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        inline: true,
        hot: true,
        colors: true,
        historyApiFallback: true,
        progress: true,
        contentBase: ROOT_PATH,
        host: '0.0.0.0',
        /*proxy: [{
            context: ['/index/!*'],
            target: 'http://192.168.84.43:3000/',
            changeOrigin: true,
            ws: true,
            secure: false
        }]*/
    }
};