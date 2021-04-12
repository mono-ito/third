/**
 * @file タブ切り替え
 *
*/

import { activeClass } from '../data/_variables';

const $tab = $('.js-tab-navi a');

$tab.on('click', event => {

  // デフォルトの挙動を無効化
  event.preventDefault();

  // タブのclassを初期化
  $tab.each((index, element) => {
    const $this = $(element);
    const targetGroup = $this.attr('href');
    $(targetGroup).removeClass(activeClass);
  });

  const $this = $(event.currentTarget);

  // 指定の要素にclass付与
  const target = $this.attr('href');
  $(target).addClass(activeClass);

  // トリガーのclassを初期化
  $tab.removeClass(activeClass);

  // クリックしたトリガーにclass付与
  $this.addClass(activeClass);

});
