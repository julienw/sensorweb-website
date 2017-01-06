const path = require('path');
const webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, './dist');
let isProd = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: {
    main: './src/index.tsx',
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'mobx',
      'mobx-react',
      'd3',
      'moment'
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  devtool: isProd ? 'source-map' : 'inline-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new CleanWebpackPlugin([BUILD_DIR]),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      mangle: false,    // DEMO ONLY: Don't change variable names.
      beautify: true,   // DEMO ONLY: Preserve whitespace
      output: {
        comments: true  // DEMO ONLY: Helpful comments
      },
      sourceMap: true
    })
  ],
  module: {
    rules: [{
      oneOf: [
        { test: /\.tsx?$/, use: ['babel-loader', 'ts-loader'] },
        { test: /(index|facebook)\.html/, use: 'file-loader?name=[name].[ext]' },
        { test: /(.*)/, use: 'file-loader?name=[name].[hash].[ext]',
          include: [
            path.resolve(__dirname, 'src')
          ]
        },
      ]
    }]
  }
};
