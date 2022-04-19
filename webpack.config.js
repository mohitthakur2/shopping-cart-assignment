const webpack = require('webpack');

module.exports = {
    entry: {
        homepage: '/lib/homepage.js',
        header: '/lib/header.js',
        cart: '/lib/cart.js',
        products: '/lib/products.js'
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/static/js/',
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    watch: process.env.WATCH === 'true',

    mode: process.env.NODE_ENV
};
