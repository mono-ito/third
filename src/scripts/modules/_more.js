/**
 * @file もっと見る
 *
*/

import { activeClass } from '../data/_variables';

const $more = $('.js-more');

$more.on('click', event => {

  // デフォルトの挙動を無効化
  event.preventDefault();

  const $this = $(event.currentTarget),
        $target = $($this.attr('href')),
        $targetChild = $target.children(),
        $targetActiveChild = $target.children('.' + activeClass),
        $targetChildShow = $target.children(':lt('+ showCnt +')'),
        addCnt = parseInt($this.attr('data-more')),
        cnt = $targetChild.length,
        activeCnt = $targetActiveChild.length,
        showCnt = addCnt + activeCnt;

  if(addCnt){
    if(cnt <= showCnt){
      $this.hide();
      $targetChildShow.addClass(activeClass);
    } else {
      $targetChildShow.addClass(activeClass);
    }
  } else {
    $this.hide();
    $targetChild.addClass(activeClass);
  }

});
