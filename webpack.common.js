const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
    validate: "./src/validate.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/templates/home-template.html",
    inject: "body",
  }),
    new HtmlWebpackPlugin({
      filename:"register.html",
      template: "./src/templates/register-template.html",
      inject: "body",

  }),
    new HtmlWebpackPlugin({
      filename:"login.html",
      template: "./src/templates/login-template.html",
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
        test: /\.(png|svg|jpg|jpeg|gif|woff)$/i,
        type: 'asset/resource'
      },
    ]
  }
};