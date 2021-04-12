/**
 * @file URLとhrefが一致したらclass付与
 *
*/

const $current = $('.js-current');

$current.each((index, element) => {

  const $this = $(element);
  // URLとhrefを比較
  if(location.pathname.match($this.attr('href'))) {
    // 一致したらclass付与
    $this.addClass('is-current');
  }

});
