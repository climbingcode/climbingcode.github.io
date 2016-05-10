var path             = require("path");
var LiveReloadPlugin = require('webpack-livereload-plugin');
var defaultSettings  = require('./cfg/loaders');

module.exports = {
    entry: [
        "./src/app.jsx"
    ],
    output: {
        path: path.resolve(__dirname, "assets"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: defaultSettings.clientLoaders(),
    resolve: {
        alias: {
            actions: defaultSettings.srcPath + '/actions/',
            components: defaultSettings.srcPath +'/components/',
            sources: defaultSettings.srcPath + '/sources/',
            stores: defaultSettings.srcPath + '/stores/',
            dispatcher: defaultSettings.srcPath + '/dispatcher/',
            config: defaultSettings.srcPath + '/config/',
            styles: defaultSettings.srcPath + '/styles/',
            server: defaultSettings.srcPath + '/server/',
            utils: defaultSettings.srcPath + '/utils/',
            images: defaultSettings.srcPath + '/images/',
            sounds: defaultSettings.srcPath + '/sounds/'
        }
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new LiveReloadPlugin({
            port: 8000
        })
    ]
};