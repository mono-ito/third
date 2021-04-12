/**
 * @file スムーススクロール
 *
*/

import { breakpointMd } from '../data/_variables';

const $window = $(window);
const $scroll = $('.js-scroll');
const speed = 400; // スクロールの速度
const $pcFixedHeight = $('.l-header__menu'); // PCで固定ヘッダーがない場合は0、ある場合は$('.class')を指定
const $spFixedHeight = $('.l-header'); // SPで固定ヘッダーがない場合は0、ある場合は$('.class')を指定

//クリックした時にスムーススクロール
$scroll.on('click', event => {

  // デフォルトの挙動を無効化
  event.preventDefault();

  const $this = $(event.currentTarget);

  // 移動先IDを取得
  const href = $this.attr('href');

  // 移動先を取得
  const $target = $(href === '#' || href === '' ? 'html' : href);

  scrollFunc($target);

});

//ページ外アンカーの時の固定ヘッダーのズレ解消してスクロール
$window.on('load', event => {

  const key = '?scroll=';
  const $url = $(location).attr('href');

  if($url.indexOf(key) != -1){

    const id = $url.split(key);
    const $target = $('#' + id[id.length - 1]);

    if($target.length){

      if($target.hasClass('js-tab-block')){
        const $targetParent = $target.closest('.js-tab');
        scrollFunc($targetParent);
      } else {
        scrollFunc($target);
      }

    }

  }

});

// 指定要素までアニメーションでスクロールさせる
function smoothScroll(position) {
  $('body,html').animate({ scrollTop:position }, speed, 'swing');
}

// スムーススクロールを実行
function scrollFunc($target, position) {
  // 移動先を数値で取得
  if(window.innerWidth < breakpointMd){
    //SP指定
    if($spFixedHeight != 0){
      const position = $target.offset().top - $spFixedHeight.outerHeight();
      smoothScroll(position);
    } else {
      const position = $target.offset().top;
      smoothScroll(position);
    }
  } else {
    //PC指定
    if($pcFixedHeight != 0){
      const position = $target.offset().top - $pcFixedHeight.outerHeight();
      smoothScroll(position);
    } else {
      const position = $target.offset().top;
      smoothScroll(position);
    }
  }
}
