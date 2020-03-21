var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
  context: __dirname,
  entry: ["./javascripts/main.js"],
  output: {
    path: path.join(__dirname, "bundles"),
    publicPath: "/bundles/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!autoprefixer-loader"
        )
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!autoprefixer-loader!sass-loader"
        )
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url?limit=40000"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  plugins: [new ExtractTextPlugin("bundle.css")],
  devServer: {
    contentBase: "./"
  }
};
