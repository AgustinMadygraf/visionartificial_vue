/*
Path: vue.config.js
*/

const webpack = require('webpack');

module.exports = {
  devServer: {
    proxy: {
      '^/video/original': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
      '^/video/process': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false)
      })
    ]
  }
};