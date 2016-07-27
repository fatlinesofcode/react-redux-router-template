module.exports = {
  context: __dirname,
  entry: {
    jsx: "./src/index.jsx",
    css: "./src/main.css",
    html: "./src/index.html",
  },

  output: {
    path: __dirname + "/www",
    filename: "bundle.js",
  },
  module: {
    preLoaders: [
        //Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"},
    ],
    loaders: [
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2'},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url?limit=10000&mimetype=application/octet-stream'},
      { test: /\.otf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-otf'},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.svg$/,  loader: 'svg-inline' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
      { test: /\.scss$/, loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass'},
      { test: /\.png$/, loader: 'url?limit=10000&mimetype=image/png'},
      { test: /\.jpg/, loader: 'file?name=[name].[ext]'}

    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json']
  },
  eslint: {
    configFile: './.eslintrc'
  },
};
