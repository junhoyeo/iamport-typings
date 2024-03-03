/** @see https://developers.portone.io/docs/ko/sdk/javascript-sdk/payrq */
export type Pg =
  | 'bluewalnut' // 블루월넛
  | 'chai' // 차이 간편결제
  | 'danal' // 다날휴대폰소액결제
  | 'danal_tpay' // 다날일반결제
  | 'daou' // 키움페이(구 페이조아)
  | 'eximbay' // 엑심베이
  | 'eximbay' // 엑심베이
  | 'html5_inicis' // 이니시스웹표준
  | 'inicis' // 이니시스ActiveX결제창 or API 방식
  | 'inicis_unified' // 이니시스 통합인증
  | 'jtnet' // JTNet
  | 'kakaopay' // 카카오페이
  | 'kcp' // NHN KCP 일반결제창 or API 방식 정기결제
  | 'kcp_billing' // NHN KCP 정기결제
  | 'kicc' // 한국정보통신
  | 'mobilians' // 모빌리언스 휴대폰소액결제
  | 'naverco' // 네이버페이-주문형
  | 'naverpay' // 네이버페이-결제형
  | 'nice' // 나이스페이
  | 'nice_v2' // (신)나이스페이
  | 'payco' // 페이코
  | 'paymentwall' // 페이먼트월
  | 'paypal' // 페이팔
  | 'paypal_v2' // (신)페이팔
  | 'settle' // 세틀뱅크
  | 'smartro' // 스마트로
  | 'smartro_v2' // (신)스마트로
  | 'smilepay' // 스마일페이
  | 'syrup' // 시럽페이
  | 'toss_brandpay' // 토스페이먼츠 브랜드페이
  | 'tosspay' // 토스페이
  | 'tosspay_v2' // (신)토스페이
  | 'tosspayments' // (신)토스페이먼츠
  | 'uplus' // 토스페이먼츠(구 LG U+)
  | 'welcome'; // 웰컴페이먼츠
