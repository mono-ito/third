/**
 * @file スクロールしたらclass付与
 *
*/

import { activeClass } from '../data/_variables';

const $window = $(window);
const $pagetop = $('.js-pagetop');

$window.on('load scroll', event => {

  $pagetop.each((index, element) => {
    const $this = $(element);
    if ($window.scrollTop() > 100) {
      // スクロール量が100を超えたらclass付与
      $this.addClass(activeClass);
    } else {
      // スクロール量が100を超えていなかったらclass除去
      $this.removeClass(activeClass);
    }
  });

});
