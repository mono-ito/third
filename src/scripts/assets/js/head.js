/**
 * @file headで読み込むのに使用するjsファイル
 *
*/

// viewportを最適化する
import { ua, contentsSize } from '../../data/_variables';

const windowSize = window.innerWidth;
const metalist = document.getElementsByTagName('meta');
const viewSize = contentsSize + 40;

for(let i = 0; i < metalist.length; i++) {
  const name = metalist[i].getAttribute('name');
  if(name && name.toLowerCase() === 'viewport') {

    // タブレットを判定
    if(ua.indexOf('iPad') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') < 0)) {
      // viewportをPC幅に固定し、PCレイアウトを表示させる
      metalist[i].setAttribute('content', 'width='+viewSize+'');
    }
    // 375pxより小さいデバイスを判定
    if(windowSize < 375){
      // viewportを375px固定し、表示領域を縮小させて表示させる
      metalist[i].setAttribute('content', 'width=375');
    }
  }
}
