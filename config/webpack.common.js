const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const htmlPages = require('./webpack.pages.js')
// const loader = require('mini-css-extract-plugin/types/loader')

module.exports = {
  entry: { index: './src/javascripts/index.js' },
  output: {
    path: path.resolve('.', 'docs'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.html?$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg|jpeg|jpg|webp|gif)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mov)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    ...htmlPages

    // new CopyPlugin({
    //   patterns: [
    //     { from: 'source', to: 'dest' },
    //     { from: 'other', to: 'public' }
    //   ]
    // })
  ]
}
