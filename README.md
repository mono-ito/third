# Coding Factory Template & Style Guide

## 構成

### タスクランナー
#### GULP

### HTMLテンプレート
#### EJS

### CSSプリプロセッサ
#### SASS(SCSS)

### CSS設計
#### FLOCSS
- FLOCSS作者の参考サイト  
https://github.com/hiloki/flocss  
https://hiloki.github.io/s/flocss-layout/

- 上記を踏まえ、再利用性や可読性、パフォーマンスを考慮し、マイナーチェンジしている点  
  - Componentに固有の幅や色や余白などの特色を持つことを許容する。
  - 必要に応じてProjectまたはUtilityを用いてスタイルの補助や上書きをする。

### クラス命名ルール
#### FLOCSS + MindBEMding
- 接頭辞は「FLOCSS」に則り、下記のようにする。  
  - Layout: .l-*  
  - Component: .c-*  
  - Project: .p-*  
  - Utility: .u-*  

- MindBEMdingの参考サイト  
https://gist.github.com/juno/6182957

#### svgアイコンの取り扱いについて
Data-URI-Schemeにエンコードして使用を推奨する。エンコードは「[postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg)」で自動変換ができる。  
例)  
`background-image: svg-load('assets/image/ico/ico_arrow_right_01.svg', fill=#e39600);`

### 画像命名ルール
#### Coding Factory Guide Line

### ディレクトリ構成例
    root
    ├── .babelrc（babelの設定）
    ├── .csscomb.json（csscombの設定）
    ├── .editorconfig（書式の設定）
    ├── .gitignore（gitの除外設定）
    ├── .htmlhintrc.json（htmlhintの設定）
    ├── README.md（本テンプレートの構成を明記）
    ├── gulpfile.js（gulpの設定。プロジェクトごとに環境設定）
    ├── package.json（packageの管理）
    ├── webpack.config.base.js（webpackの共通設定。）
    ├── webpack.config.development.js（webpackの開発環境設定。）
    ├── webpack.config.release.js（webpackの本番環境設定。）
    ├── test（プレビュー環境。タスク：gulpで生成されます。）
    ├── release（納品環境タスク：gulp releaseで生成されます。）
    └── src（開発環境）
        ├── ejs（ejsファイルを格納）
        │   ├── data（補助的なファイルを格納）
        │   │   ├── setting.csv（meta情報などを管理。）
        │   │   ├── setting.json（setting.csvからjsonに変換されたもの。gulpで自動生成）
        │   │   └── styleguide.json（スタイルガイド用のコンポーネントリスト。gulpで自動生成）
        │   ├── pages（各ページを格納。階層通りに出力）
        │   │   ├── topics
        │   │   │   ├── topics1
        │   │   │   │   └── index.ejs
        │   │   │   └── index.ejs
        │   │   ├── check.ejs（確認用サイトマップページ）
        │   │   └── index.ejs
        │   ├── parts（インクルード用共通コンポーネントを格納）
        │   │   ├── _breadcrumb.ejs
        │   │   ├── _foot.ejs
        │   │   ├── _footer.ejs
        │   │   ├── _head.ejs
        │   │   └── _header.ejs
        │   ├── styleguide（スタイルガイド用コンポーネントを格納）
        │   │   ├── component
        │   │   │   ├── c-button.ejs
        │   │   │   ├── c-check.ejs
        │   │   │   ├── c-control.ejs
        │   │   │   ├── c-embed.ejs
        │   │   │   ├── c-figure.ejs
        │   │   │   ├── c-heading-01.ejs
        │   │   │   ├── c-heading-02.ejs
        │   │   │   ├── c-heading-03.ejs
        │   │   │   ├── c-hero.ejs
        │   │   │   ├── c-icon.ejs
        │   │   │   ├── c-link.ejs
        │   │   │   ├── c-list.ejs
        │   │   │   ├── c-table-list.ejs
        │   │   │   ├── c-table-scroll.ejs
        │   │   │   ├── c-table.ejs
        │   │   │   └── c-text.ejs
        │   │   ├── js
        │   │   │   ├── js-accordion.ejs
        │   │   │   ├── js-current.ejs
        │   │   │   ├── js-inview.ejs
        │   │   │   ├── js-modal.ejs
        │   │   │   ├── js-more.ejs
        │   │   │   ├── js-scroll.ejs
        │   │   │   ├── js-slider.ejs
        │   │   │   ├── js-sticky.ejs
        │   │   │   ├── js-stretch.ejs
        │   │   │   ├── js-tab.ejs
        │   │   │   └── js-toggle.ejs
        │   │   ├── layout
        │   │   │   ├── l-block.ejs
        │   │   │   ├── l-footer.ejs
        │   │   │   ├── l-grid.ejs
        │   │   │   ├── l-header.ejs
        │   │   │   └── l-section.ejs
        │   │   ├── project
        │   │   │   ├── p-box.ejs
        │   │   │   ├── p-card.ejs
        │   │   │   ├── p-flag.ejs
        │   │   │   ├── p-form.ejs
        │   │   │   ├── p-fullscreen.ejs
        │   │   │   └── p-info.ejs
        │   │   ├── utility
        │   │   │   ├── u-align.ejs
        │   │   │   ├── u-border.ejs
        │   │   │   ├── u-color.ejs
        │   │   │   ├── u-display.ejs
        │   │   │   ├── u-font.ejs
        │   │   │   ├── u-hidden.ejs
        │   │   │   ├── u-margin.ejs
        │   │   │   └── u-width.ejs
        │   │   └── styleguide.ejs（スタイルガイドページ）
        │   └── theme（量産用のテーマを格納）
        │       ├── data
        │       │   └── XXX.xlsx（量産ページ用ファイル）
        │       ├── json
        │       │   └── XXX.json（theme_XXX.xlsxからjsonに変換されたもの。gulpで自動生成）
        │       └── template
        │           └── XXXX.ejs（量産用の雛形ejsファイル）
        ├── file（その他のファイルを格納。階層通りに出力）
        │   └── assets
        │       ├── fonts
        │       │   ├── NotoSansJP-Bold.otf
        │       │   ├── NotoSansJP-Bold.woff
        │       │   ├── NotoSansJP-Bold.woff2
        │       │   ├── NotoSansJP-Regular.otf
        │       │   ├── NotoSansJP-Regular.woff
        │       │   └── NotoSansJP-Regular.woff2
        │       ├── js
        │       │   └── jquery-3.3.1.min.js
        │       └── video
        │           └── video_01.mp4
        ├── images（画像を格納。階層通りに出力。また、gulpでimageMinifyをONの時は圧縮されて出力）
        │   └── assets
        │       └── image
        │           ├── ico
        │           │   ├── ico_arrow_bottom_01.svg
        │           │   ├── ico_arrow_circle_top.svg
        │           │   ├── ico_arrow_left_01.svg
        │           │   ├── ico_arrow_right_01.svg
        │           │   ├── ico_pdf_01.svg
        │           │   └── ico_window_01.svg
        │           └── img
        │               └── img_video_01.jpg
        ├── scripts（jsのファイルを格納）
        │   ├── assets（階層通りに出力）
        │   │   └── js
        │   │       ├── common.js（サイト共通で使用するjs）
        │   │       ├── head.js（head内で読む必要があるjs。viewportを最適化する。）
        │   │       └── XXX.js（ページ、カテゴリなどのユニークなjs）
        │   ├── data（補助的なファイルを格納）
        │   │   └── _variables.js（グローバルな変数を定義）
        │   ├── lib（プラグインを格納）
        │   │   ├── _jquery.matchHeight-min.js（高さ揃えのプラグイン）
        │   │   ├── _modaal.min.js（モーダルのプラグイン）
        │   │   ├── _picturefill.min.js（pictureタグのpolyfill）
        │   │   └── _slick.min.js（スライダーのプラグイン）
        │   └── modules（機能ごとに格納）
        │       ├── _accordion.js（アコーディオン）
        │       ├── _current.js（URLとhrefが一致したらclass付与）
        │       ├── _fit.js（object-fitの未対応ブラウザへの適用）
        │       ├── _inview.js（表示領域に入ったらclass付与）
        │       ├── _modal.js（モーダルウィンドウ）
        │       ├── _more.js（もっと見る）
        │       ├── _open.js（load時に任意のtab or accordionを開く）
        │       ├── _pagetop.js（スクロールしたらclass付与）
        │       ├── _picturefill.js（pictureタグの未対応ブラウザへの適用）
        │       ├── _responsive.js（ブレイクポイントで動作出し分け）
        │       ├── _scroll.js（スムーススクロール）
        │       ├── _slider.js（スライダー）
        │       ├── _sns.js（閲覧しているページをシェアする）
        │       ├── _sticky.js（追従）
        │       ├── _stretch.js（高さ揃え）
        │       ├── _tab.js（タブ切り替え）
        │       └── _toggle.js（クリックしたらclass付与）
        └── styles（scssファイルを格納）
            ├── assets（階層通りに出力）
            │   └── css
            │       ├── common.scss（サイト共通で使用するscss）
            │       └── top.scss（ページ、カテゴリなどのユニークなscss）
            ├── foundation（基本的なスタイルを格納）
            │   ├── _default.scss（セレクタのスタイルを定義）
            │   ├── _keyframes.scss（keyframesを定義）
            │   ├── _mixin.scss（mixinを定義）
            │   ├── _variables.scss（グローバルな設定を定義）
            │   └── _webfont.scss（ウェブフォントを定義）
            ├── layout（共通のコンテナーブロックのスタイルを格納）
            │   ├── _block.scss
            │   ├── _footer.scss
            │   ├── _grid.scss
            │   ├── _gutter.scss
            │   ├── _header.scss
            │   ├── _main.scss
            │   └── _section.scss
            └── object（繰り返されるビジュアルパターンを格納）
                ├── component（再利用できるパターンとして、小さな単位のモジュールを格納）
                │   ├── _button.scss
                │   ├── _check.scss
                │   ├── _control.scss
                │   ├── _embed.scss
                │   ├── _figure.scss
                │   ├── _heading-01.scss
                │   ├── _heading-02.scss
                │   ├── _heading-03.scss
                │   ├── _hero.scss
                │   ├── _icon.scss
                │   ├── _link.scss
                │   ├── _list.scss
                │   ├── _navi.scss
                │   ├── _table-list.scss
                │   ├── _table.scss
                │   ├── _tag.scss
                │   └── _text.scss
                ├── plugin（jsプラグイン用スタイルを格納）
                │   ├── _modaal.scss
                │   └── _slick.scss
                ├── project（プロジェクト固有のパターンであり、いくつかのComponentと、それに該当しない要素によって構成されるものを格納）
                │   ├── _accordion.scss
                │   ├── _box.scss
                │   ├── _breadcrumb.scss
                │   ├── _card.scss
                │   ├── _current.scss
                │   ├── _flag.scss
                │   ├── _form.scss
                │   ├── _fullscreen.scss
                │   ├── _info.scss
                │   ├── _inview.scss
                │   ├── _more.scss
                │   ├── _pagetop.scss
                │   ├── _slider.scss
                │   ├── _sticky.scss
                │   ├── _tab.scss
                │   └── _toggle.scss
                └── utility（ComponentとProjectレイヤーのObjectのモディファイアで解決することが難しい・適切では無い、わずかなスタイルの調整のための便利クラスなどを格納）
                    ├── _align.scss
                    ├── _border.scss
                    ├── _color.scss
                    ├── _display.scss
                    ├── _font.scss
                    ├── _hidden.scss
                    ├── _lineheight.scss
                    ├── _margin.scss
                    └── _width.scss

## 始め方とGulpタスクとwebpack

### 始め方
npmでローカルにGulpをインストールします。（省略可）

```bash
npm i -D gulp
```

npmでパッケージをインストールします。

```bash
npm i
```

### 主に使用するGulpタスク

```bash
gulp
```
開発用タスクです。/test/にコンパイルされます。


```bash
gulp release
```
納品用タスクです。/release/にコンパイルされます。  
原則、チェックもこれを使用します。

### ケースごとに使用するその他のタスク

```bash
gulp theme
```
jsonファイルから量産用ejsファイルが生成されます。
初期設定の場合、以下手順で行います。  
1. src/ejs/theme/template/にページの雛形となる「{name}.ejs」を配置します。
1. src/ejs/theme/data/に{name}.xlsxを配置します。
1. コマンド「gulp theme」を実行します。
1. src/ejs/pages/{name}/xxx.ejsファイルが生成されます。

※gulpfile.jsの環境設定で「theme: 'theme'」としている場合はタスク「gulp」で実行されます。

### gulpの環境設定
gulpfile.js内の[設定]をproject毎に設定します。  

### webpackの環境設定
jsのバンドル設定をします。  
- 共通設定は、webpack.config.base.js。
- 開発用は、webpack.config.development.js。
- 本番用は、webpack.config.release.js。

### その他
meta情報はsrc/ejs/data/setting.csvで管理しています。  
チェック用サイトマップ「スプレッドシート （checksheet_sitemap_GAS [メタ自動チェック可能]のシート：setting）」をファイル→形式を指定してダウンロード→カンマ区切りの値（.csv、現在のシート）からcsvファイルとしてダウンロードして案件ごとに設置して使用してください。 
