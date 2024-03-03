const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const 카드사_금융결제원_표준_코드 = `카드,코드,이니시스,KCP,토스페이먼츠,나이스페이먼츠,KICC,다날,페이조아(키움페이),(신)스마트로
광주카드,364,O,O,O,O,,O,O,O
비씨카드,361,O,O,O,O,O,O,O,O
삼성카드,365,O,O,O,O,O,O,O,O
신한카드,366,O,O,O,O,O,O,O,O
현대카드,367,O,O,O,O,O,O,O,O
롯데카드,368,O,O,O,O,O,O,O,O
수협카드,369,O,O,O,O,,O,O,O
씨티카드,370,O,O,O,O,O,O,O,O
NH카드,371,O,O,O,O,O,O,O,O
전북카드,372,O,O,O,O,,O,O,O (윈도우OS에서만 가능)
제주카드,373,O,O,O,O,,O,O,O
하나SK카드,374,O,O,O,O,O,O,O,O
KB국민카드,381,O,O,O,O,O,O,O,O
KDB산업은행카드,002,O,O,O,O,,,O,O
우리카드(독자),361,O,O,O,O,,O,O,O
새마을금고카드,045,O,O,O,O,,O,O,O
신협카드,048,O,O,O,O,,O,O,O
우체국카드,071,O,O,O,O,,O,,O
케이뱅크카드,089,O,O,O,O,,O,,O
카카오뱅크카드,090,O,O,O,O,,O,O,O
저축은행카드,050,,,,,,,,O
해외비자카드,VIS,미지원,미지원,미지원,미지원,미지원,미지원,미지원,
해외마스터카드,MAS,미지원,미지원,미지원,미지원,미지원,미지원,미지원,
해외다이너스카드,DIN,미지원,미지원,미지원,미지원,미지원,미지원,미지원,
해외AMEX,AMX,미지원,미지원,미지원,미지원,미지원,미지원,미지원,
해외JCB,JCB,미지원,미지원,미지원,미지원,미지원,미지원,미지원,
중국은련,UNI,미지원,미지원,미지원,미지원,미지원,미지원,미지원,`;

const unionTypes = 카드사_금융결제원_표준_코드
  .split('\n')
  .splice(1)
  .flatMap((line) => {
    if (!line) {
      return [];
    }
    const [name, code] = line.split(',');
    return { name, code };
  });

// src/card/CardCode.ts
const code = `
/**
 * 카드사 금융결제원 표준 코드
 * @see https://chaifinance.notion.site/53589280bbc94fab938d93257d452216?v=eb405baf52134b3f90d438e3bf763630
 */
export type CardCode =
${unionTypes
  .map((card) => `  | /** ${card.name} */ '${card.code}'`)
  .join('\n')};
`;

const main = async () => {
  const options = await prettier.resolveConfig(
    path.resolve(__dirname, '../.prettierrc.js'),
  );

  const content = await prettier.format(code, {
    parser: 'typescript',
    ...options,
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../src/card/CardCode.ts'),
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
