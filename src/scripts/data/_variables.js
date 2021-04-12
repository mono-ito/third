/**
 * @file グローバル変数を定義
 *
*/

// ユーザーエージェント
export const ua = navigator.userAgent;

// コンテンツサイズ
export const contentsSize = 1000;

// ブレイクポイント
export const breakpointMd = 768;

// デバイス判定
export const mqMd = window.matchMedia('(min-width:'+ breakpointMd +'px)');
export const mqMdDown = window.matchMedia('(max-width:'+ breakpointMd - 1 +'px)');
export const isMq = mqMd.matches ? 'pc' : 'sp';
export const isMqMd = isMq === 'pc' ?  true : false;
export const isMqMdDown = isMq === 'sp' ? true : false;

// アクティブクラス
export const activeClass = 'is-active';
