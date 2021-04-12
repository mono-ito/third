/* ==========================================================================//
//
// [開発用設定]
// プロジェクト毎に編集します。
//
// ========================================================================== */

/**
 * パッケージを読み込みます。
*/
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

/**
 * 環境を設定をします。
*/
const mode   = 'development'; //出力形式を設定します。development(開発モード) or production(圧縮モード) or none(非圧縮モード)
const sourcemaps = 'source-map'; // ソースマップを設定します。'none' or 'source-map' or 'inline-source-map'

const config = merge(baseConfig, {

  // コンパイルスタイル
  mode: mode,

  // ソースマップタイル
  devtool: sourcemaps

});

module.exports = config;
