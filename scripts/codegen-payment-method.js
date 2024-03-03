const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { parseItems } = require('./utils/parse-items');

// https://developers.portone.io/docs/ko/sdk/javascript-sdk/payrq?v=v1#%EA%B2%B0%EC%A0%9C%EC%9A%94%EC%B2%AD-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0-%EC%A0%95%EC%9D%98
const LATEST_PORTONE = `
card (신용카드)
trans(실시간계좌이체)
vbank(가상계좌)
phone(휴대폰소액결제)
paypal (페이팔 SPB 일반결제)
applepay (애플페이)
naverpay(네이버페이)
samsungpay(삼성페이)
kpay(KPay앱 )
kakaopay(카카오페이)
payco(페이코)
lpay(LPAY)
ssgpay(SSG페이)
tosspay(토스페이)
cultureland(컬쳐랜드)
smartculture(스마트문상)
culturegift(문화상품권)
happymoney(해피머니)
booknlife(도서문화상품권)
point(베네피아 포인트 등 포인트 결제 )
wechat(위쳇페이)
alipay(알리페이)
unionpay(유니온페이)
tenpay(텐페이)
pinpay(핀페이)
ssgpay_bank(SSG 은행계좌)
skpay(11Pay (구.SKPay))
naverpay_card(네이버페이 - 카드)
naverpay_point(네이버페이 - 포인트)
paypal(페이팔)
toss_brandpay(토스페이먼츠 브랜드페이)
tosspay_card (토스페이 - 카드)
tosspay_money (토스페이 - 머니(계좌, 포인트))
`;

// https://github.com/junhoyeo/iamport-typings/commit/4513989ad19246453c99fdd85c58a9228f314f04#diff-35e5583b6f6f993f1a5c7ec18937b0a843268a4073e5a5facdd6c6dd5bc12082R2
const OLD_IAMPORT = `
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
`;

const OLD_KEYS = OLD_IAMPORT.split('\n').flatMap((line) => {
  if (!line) {
    return [];
  }
  // return line.split('//')[0].trim();
  line = line.replace("| '", '');
  line = line.split("' //")[0];
  return line.trim();
});

const items = parseItems(LATEST_PORTONE);
for (const oldKey of OLD_KEYS) {
  if (!items.find((item) => item.key === oldKey)) {
    items.push({ key: oldKey, value: 'Deprecated' });
  }
}
items.sort((a, b) => a.key.localeCompare(b.key));

const main = async () => {
  const options = await prettier.resolveConfig(
    path.resolve(__dirname, '../.prettierrc.js'),
  );

  const content = await prettier.format(
    `
    /** @see https://developers.portone.io/docs/ko/sdk/javascript-sdk/payrq */
    export type PaymentMethod =
    | ${items
      .map((item) => {
        if (item.value) {
          return `'${item.key}' // ${item.value}`;
        }
        return `'${item.key}'`;
      })
      .join('\n| ')};
  `,
    { parser: 'typescript', ...options },
  );

  fs.writeFileSync(
    path.resolve(__dirname, '../src/PaymentMethod.ts'),
    content,
    'utf-8',
  );
};

main()
  .then(() => {
    console.log('Done ✨');
  })
  .catch((e) => {
    console.error(e);
  });
