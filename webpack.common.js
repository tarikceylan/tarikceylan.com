const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
    validateReg: "./src/validateReg.js",
    validateLog: "./src/validateLog.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/templates/home-template.html",
    excludeChunks: ["validateReg", "validateLog"],
    inject: "body",
  }),
    new HtmlWebpackPlugin({
      filename:"register.html",
      template: "./src/templates/register-template.html",
      excludeChunks: ["validateLog"],
      inject: "body",

  }),
    new HtmlWebpackPlugin({
      filename:"login.html",
      template: "./src/templates/login-template.html",
      excludeChunks: ["validateReg"],
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