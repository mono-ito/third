/**
 * @file 追従
*/

import { activeClass } from '../data/_variables';

const $window = $(window);
const $sticky = $('.js-sticky');

$window.on('load', event => {
  $sticky.each((index, element) => {

    const $this = $(element);

    // メニューのtop座標を取得する
    const offsetTop = $this.offset().top;

    $window.on('scroll', () => {
      // スクロール位置がメニューのtop座標を超えたらクラス付与
      if ($window.scrollTop() > offsetTop) {
        $this.addClass(activeClass);
      } else {
        $this.removeClass(activeClass);
      }
    });

  });
});
