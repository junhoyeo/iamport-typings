/** @see https://developers.portone.io/docs/ko/sdk/javascript-sdk/payrq */
export type PaymentMethod =
  | 'alipay' // 알리페이
  | 'applepay' // 애플페이
  | 'booknlife' // 도서문화상품권
  | 'card' // 신용카드
  | 'culturegift' // 문화상품권
  | 'cultureland' // 컬쳐랜드
  | 'happymoney' // 해피머니
  | 'kakaopay' // 카카오페이
  | 'kpay' // KPay앱
  | 'lpay' // LPAY
  | 'naverpay' // 네이버페이
  | 'naverpay_card' // 네이버페이 - 카드
  | 'naverpay_point' // 네이버페이 - 포인트
  | 'payco' // 페이코
  | 'paypal' // 페이팔 SPB 일반결제
  | 'paypal' // 페이팔
  | 'phone' // 휴대폰소액결제
  | 'pinpay' // 핀페이
  | 'point' // 베네피아 포인트 등 포인트 결제
  | 'samsung' // Deprecated
  | 'samsungpay' // 삼성페이
  | 'skpay' // 11Pay (구.SKPay)
  | 'smartculture' // 스마트문상
  | 'ssgpay' // SSG페이
  | 'ssgpay_bank' // SSG 은행계좌
  | 'tenpay' // 텐페이
  | 'toss_brandpay' // 토스페이먼츠 브랜드페이
  | 'tosspay' // 토스페이
  | 'tosspay_card' // 토스페이 - 카드
  | 'tosspay_money' // 토스페이 - 머니(계좌, 포인트)
  | 'trans' // 실시간계좌이체
  | 'unionpay' // 유니온페이
  | 'vbank' // 가상계좌
  | 'wechat'; // 위쳇페이;
