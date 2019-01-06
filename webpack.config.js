const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

module.exports = {
  entry: {
    index: path.join(__dirname, 'index.ts'),
    'index.min': path.join(__dirname, 'index.ts'),
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].user.js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  mode: 'none', // set to either 'none' or 'development'
  optimization: {
    minimize: false,
    concatenateModules: true,
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `// ==UserScript==
// @name              WaniKani Vocab Example Count
// @author            ${pkg.author}
// @description       ${pkg.description}
// @version           ${pkg.version}
// @update            ${new Date().toLocaleString()}
// @grant             GM_xmlhttpRequest
// @include           https://www.wanikani.com/lesson/session
// @run-at            document-start
// @namespace         https://greasyfork.org/en/users/56591-normful
// @connect           yourei.jp
// @license           The MIT License (MIT); http://opensource.org/licenses/MIT
// ==/UserScript==

`,
      entryOnly: true,
      raw: true,
    }),
  ],
};
