const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
    template: "./src/template.html",
    inject: "body",

  }),
    new HtmlWebpackPlugin({
      filename:"register.html",
      template: "./src/register-template.html",
      inject: "body",

  }),
    new HtmlWebpackPlugin({
      filename:"login.html",
      template: "./src/login-template.html",
      inject: "body",

  })
],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  }
};