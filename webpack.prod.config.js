const webpack = require('webpack');

module.exports = {
  entry:  './src/bundle/wrapper.js',
  output: {
      libraryTarget: 'var',
      library: 'showChatTemplate',
      path:     'builds',
      filename: 'chat-template-min.js',
  },
  module: {
      loaders: [
          {
              test:   /\.js/,
              loader: 'babel',
              query: {
                presets: ["es2015", "react", "stage-0"]
              },
              exclude: /node_modules/
          }
      ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};
