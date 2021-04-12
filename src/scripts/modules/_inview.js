/**
 * @file 表示領域に入ったらclass付与
 *
*/

import { activeClass } from '../data/_variables';

const $window = $(window);
const $inview = $('.js-inview');

$window.on('load scroll', event => {

  $inview.each((index, element) => {

    const $this = $(element);

    var positionTop = $this.offset().top;
    var scroll = $window.scrollTop();
    var windowHeight = $window.height();
    var set = scroll > positionTop - windowHeight;

    if (set){
      $this.addClass(activeClass);
    } else {
      $this.removeClass(activeClass);
    }

  });

});
