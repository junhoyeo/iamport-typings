const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { parseItems } = require('./utils/parse-items');

// https://developers.portone.io/docs/ko/sdk/javascript-sdk/payrq?v=v1#%EA%B2%B0%EC%A0%9C%EC%9A%94%EC%B2%AD-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0-%EC%A0%95%EC%9D%98
const LATEST_PORTONE = `
html5_inicis(이니시스웹표준)
inicis_unified(이니시스 통합인증)
inicis(이니시스ActiveX결제창 or API 방식 )
kcp(NHN KCP 일반결제창 or API 방식 정기결제)
kcp_billing(NHN KCP 정기결제)
uplus(토스페이먼츠(구 LG U+))
tosspayments((신)토스페이먼츠)
nice(나이스페이)
nice_v2((신)나이스페이)
jtnet(JTNet)
kicc(한국정보통신)
bluewalnut(블루월넛)
kakaopay(카카오페이)
danal(다날휴대폰소액결제)
danal_tpay(다날일반결제)
mobilians(모빌리언스 휴대폰소액결제)
chai(차이 간편결제)
syrup(시럽페이)
payco(페이코)
paypal(페이팔)
paypal_v2((신)페이팔)
eximbay(엑심베이)
naverpay(네이버페이-결제형)
naverco(네이버페이-주문형)
smilepay(스마일페이)
daou(키움페이(구 페이조아))
paymentwall(페이먼트월)
eximbay(엑심베이)
tosspay(토스페이)
tosspay_v2 ((신)토스페이)
toss_brandpay(토스페이먼츠 브랜드페이)
smartro(스마트로)
smartro_v2((신)스마트로)
settle(세틀뱅크)
welcome(웰컴페이먼츠)
`;

const main = async () => {
  const options = await prettier.resolveConfig(
    path.resolve(__dirname, '../.prettierrc.js'),
  );

  const content = await prettier.format(
    `
    /** @see https://developers.portone.io/docs/ko/sdk/javascript-sdk/payrq */
    export type Pg =
    | ${parseItems(LATEST_PORTONE)
      .map((item) => `'${item.key}' // ${item.value}`)
      .join('\n| ')}
    ;
  `,
    { parser: 'typescript', ...options },
  );

  fs.writeFileSync(path.resolve(__dirname, '../src/Pg.ts'), content, 'utf-8');
};

main()
  .then(() => {
    console.log('Done ✨');
  })
  .catch((e) => {
    console.error(e);
  });
