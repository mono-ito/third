/**
 * @file アコーディオン
 *
*/

import { activeClass } from '../data/_variables';

const $window = $(window);
const $accordion = $('.js-accordion');
const speed = 300; // 開閉スピード

function responsiveAccordion() {
  $accordion.each((index, element) => {
    const $this = $(element);
    const $target = $this.next();
    const targetHeight = $target.children().outerHeight();
    if($this.hasClass(activeClass)) {
      $target.css('max-height',targetHeight);
    }
  });
}

$window.on('resize',() => {
  responsiveAccordion();
});

$accordion.on('click', event => {

  // デフォルトの挙動を無効化
  event.preventDefault();

  const $this = $(event.currentTarget);
  const $target = $this.next();
  const targetHeight = $target.children().outerHeight();

  // data-accordionが指定されていたらグループ化
  const group = $this.attr('data-group');
  if(group){
    if($this.hasClass(activeClass)){
      $this.removeClass(activeClass);
      $target.removeAttr('style');
    } else {
      $('[data-group="'+group+'"]').removeClass(activeClass).next().removeAttr('style');
      $this.addClass(activeClass);
      $target.css('max-height',targetHeight);
    }
  } else {
    // クリックする度にclassを付与/除去
    $this.toggleClass(activeClass);
    // 次の要素にmax-heightを与える
    if($this.hasClass(activeClass)) {
      $target.css('max-height',targetHeight);
    } else {
      $target.removeAttr('style');
    }
  }

});
