const path = require("path");
const glob = require('glob');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
  entry: {
    "aplicacao": "./src/index.js"
  },
  output: {
    path: path.resolve("./dist"),
    filename: "aplicacao.js"
  },
  devtool: "eval-source-map",
  devServer: {
    port: 8000,
    proxy: {
      "/api/**": {
        target: "http://localhost:3000/",
        logLevel: "info"
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "ngtemplate-loader",
            options: {
              relativeTo: path.resolve("./src") + "/"
            }
          },
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000
          }
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            minetype: "application/font-woff"
          }
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      debug: false,
      minimize: true,
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ]
};