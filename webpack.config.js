const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src',
    output:{
        path: path.resolve(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/env']
                }
            }
        },{
            test: /\.s[ac]ss$/i,
            use: ['style-loader','css-loader', 'sass-loader']
        }]
    },
    devtool:'source-map'
}