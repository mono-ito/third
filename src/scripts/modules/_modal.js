/**
 * @file モーダルウィンドウ
 * https://github.com/humaan/Modaal
*/

import modaal from '../lib/_modaal.min';

//インライン
$('.js-modal').modaal();

//画像
$('.js-modal-image').modaal({
  type: 'image'
});

//ajax
$('.js-modal-ajax').modaal({
  type: 'ajax'
});
