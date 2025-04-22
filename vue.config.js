/*
Path: vue.config.js
*/

const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/visionartificial_vue/dist/'
    : '/',
  devServer: {
    proxy: {
      '^/video/original': {
        target: process.env.VUE_APP_API_BASE_URL || 'http://localhost:5000',
        changeOrigin: true
      },
      '^/video/process': {
        target: process.env.VUE_APP_API_BASE_URL || 'http://localhost:5000',
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