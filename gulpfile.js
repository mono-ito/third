/* ==========================================================================//
//
// [パッケージ]
//
// ==========================================================================*/
const
// gulp
gulp             = require('gulp'),
// ejs
ejs              = require("gulp-ejs"),
fs               = require('fs'),
htmlhint         = require('gulp-htmlhint'),
htmlmin          = require('gulp-htmlmin'),
// scss
sass             = require('gulp-sass')
sassGlob         = require('gulp-sass-glob'),
csscomb          = require('gulp-csscomb'),
sourcemaps       = require('gulp-sourcemaps'),
cleanCss         = require('gulp-clean-css')
postCss          = require('gulp-postcss'),
autoprefixer     = require('autoprefixer'),
flexbug          = require('postcss-flexbugs-fixes'),
inlineSvg        = require('postcss-inline-svg'),
svgo             = require('postcss-svgo'),
sassVariables    = require('gulp-sass-variables'),
// scripts
webpack          = require("webpack"),
webpackStream    = require("webpack-stream"),
webpackDev       = require("./webpack.config.development"),
webpackRelease   = require("./webpack.config.release"),
// images
imagemin         = require('gulp-imagemin'),
pngquant         = require('imagemin-pngquant'),
mozjpeg          = require('imagemin-mozjpeg'),
// server
browserSync      = require('browser-sync'),
ssi              = require("browsersync-ssi"),
php              = require('gulp-connect-php'),
// utility
env              = require('gulp-env'),
del              = require('del'),
rimraf           = require('rimraf'),
path             = require('path'),
rename           = require('gulp-rename'),
replace          = require('gulp-replace'),
plumber          = require('gulp-plumber'),
runSequence      = require('run-sequence'),
gulpIf           = require('gulp-if'),
data             = require('gulp-data'),
cache            = require('gulp-cached'),
changed          = require('gulp-changed'),
csv2json         = require('gulp-csv2json'),
spreadsheet2json = require('gulp-spreadsheet2json'),
crLfReplace      = require('gulp-cr-lf-replace'),
convertEncoding  = require('gulp-convert-encoding'),
directoryMap     = require("gulp-directory-map"),
sortJSON         = require('gulp-json-sort').default;

/* ==========================================================================//
//
// [設定]
// プロジェクト毎に編集します。
//
// ==========================================================================*/
/**
 * 環境を設定をします。
*/
env({
  vars: {
    // 共通環境設定
    html: 'ejs',  // htmlテンプレートを指定します。
    css: 'scss',  // cssプリプロセッサを指定します。
    extname: 'html',  // 出力する拡張子['html' or 'php']を指定します。
    phpPort: 8888,  // browserSyncをPHPで起動する場合設定します。MAMP or XAMPPの設定参照。
    browserStart: 'check',  // browserSyncを起動時にブラウザに表示するファイルを指定します。拡張子は不要です。
    theme: 'none', // 量産用ファイル生成します。['theme' or 'none']。生成しない場合は、'none'を指定します。
    styleguide: 'styleguide', // スタイルガイド用jsonを生成します。['styleguide' or 'none']。生成しない場合は、'none'を指定します。
    // 開発環境設定
    root: '', // 開発環境のルートパスを指定します。
    dist: 'test', // 開発環境の出力先を指定します。
    htmlLint: true, // 開発環境でhtmlの構文チェックをします。
    htmlMinify: false, // 開発環境でhtmlを圧縮します。
    cssComb: false, // 開発環境でcssのプロパティ順を整理します。
    cssMinify: false, // 開発環境でcssを圧縮します。
    cssSorcemap: true, // 開発環境でcssにソースマップを追加します。
    imageMinify: false, // 開発環境で画像を圧縮します。
    // 基本変更不要
    shiftJis: false, // 開発環境で文字コードをshift_jisに変換します。
    webpackConfig: true, // 開発環境用のwebpackの設定。
  }
});

/**
 * 本番環境を設定します。
*/
gulp.task('release:env', () => {
  env({
    vars: {
      root: '', // 本番環境のルートパスを指定します。 /wp/wp-content/themes/meeit
      dist: 'release', // 本番環境の出力先を指定します。
      extname: 'html',  // 出力する拡張子['html' or 'php']を指定します。
      htmlLint: false, // 本番環境でhtmlの構文チェックをします。
      htmlMinify: false, // 本番環境でhtmlを圧縮します。
      cssComb: true, // 本番環境でcssのプロパティ順を整理します。
      cssMinify: false, // 本番環境でcssを圧縮圧縮します。
      cssSorcemap: false, // 本番環境でcssにソースマップを追加します。
      jsSorcemap: false, // 本番環境でjsにソースマップを追加します。
      imageMinify: true, // 本番環境で画像を圧縮します。
      shiftJis: false, // 本番環境で文字コードをshift_jisに変換します。
      // 基本変更不要
      webpackConfig: false, // 本番環境用のwebpackの設定。
    }
  });
});

/**
 * 開発用のパス。
*/
const src = {
  'root': 'src/',
  'ejs': ['src/ejs/pages/**/*.ejs','src/ejs/theme/pages/**/*.ejs','src/ejs/styleguide/styleguide.ejs'],
  'ejsPages': 'src/ejs/pages/',
  'ejsParts': 'src/ejs/parts/**/_*.ejs',
  'ejsData': 'src/ejs/data/',
  'ejsDataSet': 'src/ejs/data/setting.json',
  'ejsTheme': 'src/ejs/theme/',
  'styleguide': ['src/ejs/styleguide/**/*.ejs','!src/ejs/styleguide/styleguide.ejs'],
  'styleguideData': 'src/ejs/data/styleguide.json',
  'scss': 'src/styles/**/*.scss',
  'scripts': 'src/scripts/**/*.js',
  'images': 'src/images/**/*.{png,jpg,gif,svg}',
  'svg': 'src/images/**/*.svg',
  'file': 'src/file/**/*.*'
};

/**
 * 出力用のパス。
*/
const dist = {
  'root': '/'
};

/**
 * postcss plugin
*/
const browsers = [
  'last 2 version', // （Major Browsersの）最新2バージョン
  'ie >= 11', // IE11以上
  'iOS >= 10', // iOS10以上
  'Android >= 4.4' // Android4.4以上
];

const postCssPlugin = [
  autoprefixer({ // ベンダープレフィックスを付与します。
    browsers: browsers,
    cascade: false,
    grid: true
  }),
  inlineSvg({ // svgをdata URI schemeに変換します。
    path: 'src/images/',
    removeFill: true
  }),
  svgo, // svgの最適化をします。
  flexbug // flexboxのバグ解消します。
];

/* ==========================================================================//
//
// [タスク]
//
// ==========================================================================*/
/**
 * `.ejs`を`.html`にコンパイルします。
*/
gulp.task('ejs', () => {
  if(isFile(src.styleguideData)){
    ejsOption = {
      set: JSON.parse(fs.readFileSync(src.ejsDataSet)),
      styleguide: JSON.parse(fs.readFileSync(src.styleguideData))
    };
  } else {
    ejsOption = {
      set: JSON.parse(fs.readFileSync(src.ejsDataSet))
    };
  }
  gulp.src(src.ejs)
    .pipe(cache('ejs'))
    .pipe(plumber({errorHandler: "Error: <%= error.message %>"}))
    .pipe(gulpIf(JSON.parse(process.env.htmlLint), htmlhint('.htmlhintrc.json')))
    .pipe(gulpIf(JSON.parse(process.env.htmlLint), htmlhint.reporter()))
    .pipe(data(file => ({
      'root': process.env.root,
      'rootPath': file.path.replace(/\\/g,'/').split('/src/')[0]+'/' + 'src/ejs/',
      'fileName': file.path.replace(/\\/g,'/').replace('.ejs','.' + process.env.extname).split('/src/ejs/pages')[1]
    })))
    .pipe(ejs(ejsOption))
    .pipe(rename({extname: '.' + process.env.extname}))
    .pipe(gulp.dest(process.env.dist + dist.root))
    .pipe(gulpIf(JSON.parse(process.env.htmlMinify),
      htmlmin({ // htmlを整形
        collapseWhitespace : true, // 余白を除去する
        preserveLineBreaks: true, // 1行にする
        removeComments : true // HTMLコメントを除去する
      })
    ))
    .pipe(gulpIf(JSON.parse(process.env.shiftJis), replace('UTF-8', 'shift_jis')))
    .pipe(gulpIf(JSON.parse(process.env.shiftJis), crLfReplace({changeCode: 'CR+LF'})))
    .pipe(gulpIf(JSON.parse(process.env.shiftJis), convertEncoding({to: 'shift_jis'})))
    .pipe(gulp.dest(process.env.dist + dist.root))
    .pipe(browserSync.reload({stream: true}))
});

/**
 * `.ejs`のインクルードファイルを変更した場合、cacheをクリアします。
*/
gulp.task('ejs:cache', () => {
  delete cache.caches['ejs'];
});

/**
 * ページ情報を記載したExcelをjsonに変換します。
*/
gulp.task('setting', () => {
  return gulp.src(src.ejsData + 'setting.csv')
    .pipe(csv2json())
    .pipe(rename(path => {path.extname = '.json';}))
    .pipe(gulp.dest(src.ejsData))
});

/**
 * スタイルガイドマップを生成します。
*/
gulp.task('styleguide', () => {
  return gulp.src(src.styleguide)
    .pipe(directoryMap({
      filename: 'styleguide.json'
    }))
    .pipe(sortJSON({space: 2}))
    .pipe(gulp.dest(src.ejsData));
});

/**
 * 量産用のページ生成します。
*/
gulp.task('theme:ejs', ['theme:json'], () => {
  const dirPath = path.relative(__dirname, src.ejsTheme + 'json/');
  const themeJson = listFiles(dirPath);
  themeJson.forEach((value,index) => {
    const baseThemePath = value.replace('json\/','template\/');
    const tempThemePath = baseThemePath.replace('.json','');
    const pageThemePath = tempThemePath.replace('template\/', '').replace('theme', 'pages');
    const theme = JSON.parse(fs.readFileSync(value));
    for(const i in theme) {
      gulp.src(tempThemePath + '.ejs')
        .pipe(data(file => ({
          'rootPath': file.path.replace(/\\/g,'/').split('/src/')[0]+'/' + 'src/ejs/'
        })))
        .pipe(ejs({
          themeSet: theme[i]
        }))
        .pipe(rename({
          basename: theme[i].name,
          extname: '.ejs'
        }))
        .pipe(gulp.dest(pageThemePath))
    }
  });
});

/**
 * 量産ページ用にExcelをjsonに変換します。
*/
gulp.task('theme:json', () => {
  return gulp.src(src.ejsTheme +'data/**/*.xlsx')
    .pipe(spreadsheet2json({
      headRow: 1,
      valueRowStart: 2,
      trace: true
    }))
    .pipe(rename({extname: '.json'}))
    .pipe(replace('\\r\\n', '\<br\>'))
    .pipe(gulp.dest(src.ejsTheme + 'json/'))
});

/**
 * テンプレートファイルから量産します。
*/
gulp.task('theme', () => {
  runSequence(
    'theme:ejs'
  )
});

/**
 * `.scss`を`.css`にコンパイルします。
 * ベンダープレフィックスの付与、インデントやプロパティの整形、圧縮が実行されます。
*/
gulp.task('scss', () => {
  gulp.src(src.scss)
    .pipe(sassVariables({ $root: process.env.root }))
    .pipe(sassGlob())
    .pipe(gulpIf(JSON.parse(process.env.cssSorcemap), sourcemaps.init()))
    .pipe(plumber({errorHandler: "Error: <%= error.message %>"}))
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(postCss(postCssPlugin))
    .pipe(gulpIf(JSON.parse(process.env.cssComb), csscomb()))
    .pipe(gulpIf(JSON.parse(process.env.cssMinify), cleanCss()))
    .pipe(gulpIf(JSON.parse(process.env.cssSorcemap), sourcemaps.write('.')))
    .pipe(gulp.dest(process.env.dist + dist.root))
    .pipe(gulpIf(JSON.parse(process.env.shiftJis), replace('UTF-8', 'shift_jis')))
    .pipe(gulpIf(JSON.parse(process.env.shiftJis), crLfReplace({changeCode: 'CR+LF'})))
    .pipe(gulpIf(JSON.parse(process.env.shiftJis), convertEncoding({to: 'shift_jis'})))
    .pipe(gulpIf(JSON.parse(process.env.shiftJis), gulp.dest(process.env.dist + dist.root)))
    .pipe(browserSync.reload({stream: true}))
});

/**
 * jsファイルを連結し、出力します。
*/
gulp.task('scripts', () => {
  gulp.src(src.scripts)
    .pipe(plumber({errorHandler: "Error: <%= error.message %>"}))
    .pipe(changed(process.env.dist + dist.root + '**/*.js'))
    .pipe(gulpIf(JSON.parse(process.env.webpackConfig), webpackStream(webpackDev, webpack), webpackStream(webpackRelease, webpack)))
    .pipe(gulp.dest(process.env.dist + dist.root))
    .pipe(browserSync.reload({stream: true}));
});

/**
 * デベロップディレクトリの画像を圧縮、
 * 階層構造を維持したまま出力します。
*/
 gulp.task('images', () => {
   gulp.src(src.images)
     .pipe(changed(process.env.dist + dist.root + '**/*.+(jpg|png|gif|svg)'))
     .pipe(gulpIf(JSON.parse(process.env.imageMinify),
       imagemin([
         pngquant({
           speed: 1,
           dithering: 0
         }),
         mozjpeg({
           quality: 85,
           progressive: true
         }),
         imagemin.gifsicle(),
         imagemin.svgo({
           plugins: [
             {removeViewBox: false}
           ]
         })
       ], {
         verbose: true
       }))
     )
     .pipe(gulp.dest(process.env.dist + dist.root))
 });

/**
 * その他のファイルを出力します。
*/
gulp.task('file', () => {
  gulp.src(src.file)
    .pipe(cache('file'))
    .pipe(plumber({errorHandler: "Error: <%= error.message %>"}))
    .pipe(gulp.dest(process.env.dist + dist.root))
});

/**
 * ローカルサーバーを起動します。
*/
gulp.task('server:html', () => {
  browserSync({
    server: {
      middleware: [ssi({baseDir: process.env.dist + dist.root, ext: ".html"})],
      baseDir: process.env.dist + dist.root
    },
    startPath: process.env.browserStart + '.' + process.env.extname,
    open: 'external',
    notify: false,
    ghostMode: {
      clicks: false
    }
  });
});

/**
* ローカルサーバーをPHPビルトインサーバー経由で起動します。
*/
gulp.task('server:php', () => {
  php.server({
    base: process.env.dist + dist.root,
    port: process.env.phpPort
  }, function (){
    browserSync({
      proxy: 'localhost:'+ process.env.phpPort,
      port: process.env.phpPort,
      startPath: process.env.browserStart + '.' + process.env.extname,
      open: 'external',
      notify: false,
      ghostMode: {
        clicks: false
      }
    });
  });
});

/**
 * サーバーをリロードします。
*/
gulp.task('server:reload', () => {
  browserSync.reload();
});

/**
 * 出力用ディレクトリを削除します。
*/
gulp.task('clean', cb => {
  rimraf(process.env.dist + dist.root, cb);
});

/**
 * 条件分岐用の空タスクです。
*/
gulp.task('none');

/**
 * 一連のタスクを処理します。
*/
gulp.task('build', ['setting', process.env.styleguide, process.env.theme], () => {
  runSequence(
    [
      'scripts',
      'images',
      'file',
      process.env.css,
      process.env.html
    ]
  )
});

/**
 * 公開用ファイルを作成します。
*/
gulp.task('release', ['release:env','clean'], () => {
  runSequence(
    'build'
  )
});

/**
 * watchタスクを指定します。
*/
gulp.task('watch', ['build'],() => {
  gulp.watch(src.ejs, ['ejs']);
  gulp.watch(src.ejsParts, ['ejs:cache', 'ejs']);
  gulp.watch(src.ejsData + 'setting.xlsx', ['setting', 'ejs:cache', 'ejs']);
  gulp.watch(src.styleguide, ['styleguide', 'ejs:cache', 'ejs']);
  gulp.watch(src.scss, ['scss']);
  gulp.watch(src.svg, ['scss']);
  gulp.watch(src.scripts, ['scripts']);
  gulp.watch(src.images, ['images']);
  gulp.watch(src.file, ['file']);
});

/**
 * 開発に使用するタスクです。
 * `gulp`タスクにbrowser-syncを追加します。
 * ローカルサーバーを起動し、リアルタイムに更新を反映させます。
*/
gulp.task('default', ['clean'], () => {
  runSequence(
    'watch',
    'server:' + process.env.extname
  )
});

/* ==========================================================================//
//
// [ユーザー定義関数]
//
// ==========================================================================*/
/**
 * ファイルの存在判定をします。
*/
function isFile(file) {
  try {
    fs.statSync(file);
    return true
  } catch(err) {
    if(err.code === 'ENOENT') return false
  }
}

/**
 * ファイルタイプの列挙体
*/
const FileType = {
  File: 'file',
  Directory: 'directory',
  Unknown: 'unknown'
}

/**
 * ファイルの種類を取得する
 */
const getFileType = path => {
  try {
    const stat = fs.statSync(path);

    switch (true) {
      case stat.isFile():
        return FileType.File;

      case stat.isDirectory():
        return FileType.Directory;

      default:
        return FileType.Unknown;
    }

  } catch(e) {
    return FileType.Unknown;
  }
}

/**
 * 指定したディレクトリ配下のすべてのファイルをリストアップする
 */
const listFiles = dirPath => {
  const ret = [];
  const paths = fs.readdirSync(dirPath);

  paths.forEach(a => {
    const path = `${dirPath}/${a}`;

    switch (getFileType(path)) {
      case FileType.File:
        ret.push(path);
        break;

      case FileType.Directory:
        ret.push(...listFiles(path));
        break;

      default:
        /* noop */
    }
  })

  return ret;
};
