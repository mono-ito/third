/* ==========================================================================//
//
// [共通設定設定]
//
// ========================================================================== */
/**
 * 環境を設定をします。
*/
const mode   = 'none'; //出力形式を設定します。development(開発モード) or production(圧縮モード) or none(非圧縮モード)
const vender = 'assets/js/lib.js'; // プラグインの出力先とファイル名を設定します。
const sourcemaps = 'none'; // ソースマップを設定します。'none' or 'source-map' or 'inline-source-map'


/* ==========================================================================//
//
// [パッケージ]
//
// ========================================================================== */
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

/* ==========================================================================//
//
// [タスク]
//
// ========================================================================== */

const path = require('path'),
      glob = require('glob'),
      _    = require('lodash');

const jsBasePath = path.resolve(__dirname, 'src/scripts/'),
      jsDistPath = path.resolve(__dirname, 'test/');

// filenameを取得するメソッドを追記
String.prototype.filename = function(){
  return this.match(".+/(.+?)([\?#;].*)?$")[1];
}

// jsBasePath配下の.jsのpathも含めたファイルを取得する
var targets = _.filter(glob.sync(`${jsBasePath}/**/*.js`), (item) => {
  return !item.filename().match(/^_/)
});

// entryに入れるhash
var entries = {};

// pathも含めたfilenameからpathとfilenameでhashを作る
targets.forEach(value => {
  var re = jsBasePath.replace(/\\/g, "/");
  var key = value.replace(re+'/', '');
  entries[key] = value;
});

const config = {

  // コンパイルスタイル
  mode: mode, //development or production or none

  // 読み込み元
  entry: entries,

  devtool: sourcemaps,

  // 吐き出し先
  output: {
    path: jsDistPath,
    filename: '[name]'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /src[\\/]scripts[\\/]lib/,
          name: vender,
          chunks: 'initial',
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          output: {
            comments: /^\**!|@preserve|@license|@cc_on/
          },
        },
      })
    ]
  },

  // グローバルスコープから参照
  externals: {
    jquery: 'jQuery'
  },

  // 下記の拡張子のentryからimportされているファイルをくっつける
  resolve: {
    extensions: ['.js']
  },

  // パフォーマンスの警告無効
  performance: {
    hints: false
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            // Babel
            loader: 'babel-loader?cacheDirectory',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        // node_modules は除外
        exclude: /node_modules/,
      }
    ]
  }
}

module.exports = config;
