const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleVisualizerPlugin = require('webpack-visualizer-plugin');

module.exports = {
  context: __dirname + '/src',
    entry: {
      app: [
        './index.js'
      ],
      lazy: [
        './controllers/lazy/lazy.controller.js'
      ],
      js_lib: [
        '../js-lib/jquery-3.2.1.min.js'
      ]
    },
    output: {
        path: __dirname,
        filename: './dist/[name].bundle.min.js'
    },
    resolve : {
        modules: [
          path.resolve(__dirname + '/src'),
          path.resolve(__dirname + '/node_modules')
        ],
        extensions: ['.js', '.css', '.styl'],
    },
 module: {
        rules: [
            { test: /\.(js)$/,
              use: ['babel-loader'],
              exclude: '/node_modules/'
            },
            { test: /\.(css)$/,
              use: ['style-loader', 'css-loader?module'],
              exclude: '/node_modules/'
            },
            {
              test: /\.styl$/,
              use: ['style-loader', 'css-loader?module&camelCase=dashes', 'stylus-loader'],
              exclude: '/node_modules/'
            },
            {
              test: /\.html$/,
              use: ['html-loader'],
              exclude: '/node_modules/'
            },
            {
              test: /\.svg$/,
              use: ['svg-inline-loader'],
              exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'node-static',
        filename: './dist/node-static.min.js',
        minChunks(module, count) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      //new UglifyJSPlugin(),
       new CopyWebpackPlugin([
           { from: 'index.html', to: './dist/' },
           { from: 'partials', to: './dist/partials'}
      ]),
      new BundleVisualizerPlugin(),
    ],
    devtool: 'source-map'
}