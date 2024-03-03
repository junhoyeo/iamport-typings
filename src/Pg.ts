/** @see https://developers.portone.io/docs/ko/sdk/javascript-sdk/payrq */
export type Pg =
  | 'html5_inicis' // 이니시스웹표준
  | 'inicis_unified' // 이니시스 통합인증
  | 'inicis' // 이니시스 ActiveX결제창 or API 방식
  | 'kcp' // NHN KCP
  | 'kcp_billing' // NHN KCP 정기결제
  | 'uplus' // 토스페이먼츠(구 LG U+)
  | 'tosspayments' // 토스페이먼츠 신모듈
  | 'nice' // 나이스페이
  | 'jtnet' // JTNet
  | 'kicc' // 한국정보통신
  | 'bluewalnut' // 블루월넛
  | 'kakaopay' // 카카오페이
  | 'danal' // 다날휴대폰소액결제
  | 'danal_tpay' // 다날일반결제
  | 'mobilians' // 모빌리언스 휴대폰소액결제
  | 'chai' // 차이 간편결제
  | 'syrup' // 시럽페이
  | 'payco' // 페이코
  | 'paypal' // 페이팔
  | 'eximbay' // 엑심베이
  | 'naverpay' // 네이버페이-결제형
  | 'naverco' // 네이버페이-주문형
  | 'smilepay' // 스마일페이
  | 'daou' // 키움페이(구 페이조아)
  | 'paymentwall' // 페이먼트월
  | 'eximbay' // 엑심베이
  | 'tosspay' // 토스간편결제
  | 'smartro' // 스마트로
  | 'settle' // 세틀뱅크
  | (string & {});
