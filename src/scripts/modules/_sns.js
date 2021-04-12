/**
 * @file シェアボタン
 *
*/

const url = location.href;
const title = $('title').html();

function popupWindow(popupUrl) {

  const widthHalf = window.screen.width / 2,
        heightHalf = window.screen.height / 2,
        blankWindowWidth = 640,   // 別窓の横幅
        blankWindowHeight = 640,  // 別窓の縦幅
        options = { // 後ほど記載する window.open の第３引数で使用する
          left  : Math.floor(widthHalf - (blankWindowWidth / 2)),   // 別窓の X座標
          top   : Math.floor(heightHalf - (blankWindowHeight / 2)), // 別窓の Y座標
          width : blankWindowWidth,
          height: blankWindowHeight
        };

  const arg = 'left=' + options.left
            + ',top=' + options.top
            + ',width=' + options.width
            + ',height=' + options.height;

  window.open(popupUrl, 'window', arg);
}

// twitter シェアの生成
const text = encodeURIComponent(title);
const tweetUrl = 'http://twitter.com/share?url=' + url + '&text=' + text;
$('.js-twitter').on('click', event => {
  event.preventDefault();
  popupWindow(tweetUrl);
});

// facebookシェアの生成
const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
$('.js-facebook').on('click', event => {
  event.preventDefault();
  popupWindow(facebookUrl);
});

// LINEシェア
const message = title + ' ' + url;
const lineUrl = 'https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(message);

$('.js-line').on('click', event => {
  event.preventDefault();
  popupWindow(lineUrl);
});
