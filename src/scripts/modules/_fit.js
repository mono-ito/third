/**
 * @file object-fitのpolyfill
 * https://github.com/constancecchen/object-fit-polyfill
*/

import objectFit from '../lib/_objectFitPolyfill.min';

const $window = $(window);
const elements = document.querySelectorAll('.js-fit');

$window.on('load resize', function() {
  objectFitPolyfill(elements);
});
