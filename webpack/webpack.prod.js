const config = require('./webpack.base')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractCSS = new ExtractTextPlugin('bundle.css');

config.plugins = config.plugins.concat([
  extractCSS,
  new webpack.optimize.UglifyJsPlugin({
    comments: false
  })
])

// Css-loader - get CSS and style
// Can add in the futur some pre-processed CSS
let cssLoaders = config.module.loaders[0].loaders
config.module.loaders[0].loaders = null
// Get loader CSS and remove first value
config.module.loaders[0].loader = extractCSS.extract(cssLoaders.slice(1, 10))

module.exports = config
