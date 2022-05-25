// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js", //TODO: .[contenthash]. will be implemented.
        path: path.resolve(__dirname, "dist"),
    },

    //TODO:HTML Template Structure will be implemented.

    // plugins: [new HtmlWebpackPlugin({
    //     template: "./src/template.html",
    //     inject: "body"
    // })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}