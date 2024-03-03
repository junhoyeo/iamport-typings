/** @see https://developers.portone.io/docs/ko/sdk/javascript-sdk/payrq */
export type PaymentMethod =
  | 'card' // 신용카드
  | 'trans' // 실시간계좌이체
  | 'vbank' // 가상계좌
  | 'phone' // 휴대폰소액결제
  | 'paypal' // 페이팔 SPB 일반결제
  | 'applepay' // 애플페이
  | 'naverpay' // 네이버페이
  | 'samsung' // 삼성페이
  | 'kpay' // KPay앱
  | 'kakaopay' // 카카오페이
  | 'payco' // 페이코
  | 'lpay' // LPAY
  | 'ssgpay' // SSG페이
  | 'tosspay' // 토스간편결제
  | 'cultureland' // 문화상품권
  | 'smartculture' // 스마트문상
  | 'happymoney' // 해피머니
  | 'booknlife' // 도서문화상품권
  | 'point' // 베네피아 포인트 등 포인트 결제
  | 'wechat' // 위쳇페이
  | 'alipay' // 알리페이
  | 'unionpay' // 유니온페이
  | 'tenpay' // 텐페이
  | (string & {});
