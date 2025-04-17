/*
Path: vue.config.js
*/

const webpack = require('webpack');

module.exports = {
  devServer: {
    proxy: {
      '^/video_original': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
      '^/video_process': {
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