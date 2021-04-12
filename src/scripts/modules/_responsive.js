/**
 * @file ブレイクポイントで動作出し分け
*/

import { mqMd, isMq, isMqMd, isMqMdDown } from '../data/_variables';

// PCイベント
if(isMqMd){
  console.log(isMq)
}

// SPイベント
if(isMqMdDown){
  console.log(isMq)
}

// レスポンシブイベント
function responsive() {
  if (mqMd.matches) {
    // PCイベント
    console.log('pc')
  } else {
    // SPイベント
    console.log('sp')
  }
}
responsive();
mqMd.addListener(responsive);
