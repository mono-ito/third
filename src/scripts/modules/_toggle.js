/**
 * @file クリックしたらclass付与
 *
*/

import { activeClass } from '../data/_variables';

const $toggle = $('.js-toggle');

$toggle.on('click', event => {

  // デフォルトの挙動を無効化
  event.preventDefault();

  const $this = $(event.currentTarget);

  // hrefの指定先にclassを付与/除去
  const id = $this.attr('href');
  if(id != '#'){
    $(id).toggleClass(activeClass);
  }

  // data-toggleが指定されていたらグループ化
  const group = $this.attr('data-group');
  if(group){
    if($this.hasClass(activeClass)){
      $this.removeClass(activeClass);
    } else {
      $('[data-group="'+group+'"]').removeClass(activeClass);
      $this.addClass(activeClass);
    }
  } else {
    // クリックする度にclassを付与/除去
    $this.toggleClass(activeClass);
  }

});
