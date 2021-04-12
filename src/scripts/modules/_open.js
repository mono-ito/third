/**
 * @file URLパラメータ「?scroll=id」と「id」が一致したらtab or accordionを開く
 *
*/

const $window = $(window);
const hash = location.hash;
const loaded = 'is-loaded';

$window.on('load', () => {

  //ロードが完了したらclass付与
  $('body').addClass(loaded);

  const key = '?scroll=';
  const $url = $(location).attr('href');

  if($url.indexOf(key) != -1){
    const id = $url.split(key);
    const target = '#' + id[id.length - 1];

    //アコーディオンカレント
    $(target + '.js-accordion').click();

    //タブカレント
    $('.js-tab-navi a[href="'+ target +'"]').click();
  }

});
