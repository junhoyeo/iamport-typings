const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/
const PayPalSupportedCurrencies = `
Australian dollar	AUD
Brazilian real 2	BRL
Canadian dollar	CAD
Chinese Renmenbi 4	CNY
Czech koruna	CZK
Danish krone	DKK
Euro	EUR
Hong Kong dollar	HKD
Hungarian forint 1	HUF
Israeli new shekel	ILS
Japanese yen 1	JPY
Malaysian ringgit 3	MYR
Mexican peso	MXN
New Taiwan dollar 1	TWD
New Zealand dollar	NZD
Norwegian krone	NOK
Philippine peso	PHP
Polish złoty	PLN
Pound sterling	GBP
Singapore dollar	SGD
Swedish krona	SEK
Swiss franc	CHF
Thai baht	THB
United States dollar	USD
`;

const currencyMap = PayPalSupportedCurrencies.split('\n')
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => line.replace(/\d/g, '').trim())
  .reduce((acc, line) => {
    const [currency, code] = line.split('\t');
    acc[currency] = code;
    return acc;
  }, {});

const code = `
/**
 * PayPal supported currencies
 * @see https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/
 */
export type PayPalSupportedCurrency =
${Object.keys(currencyMap)
  .map((currency) => `  | /** ${currency} */ '${currencyMap[currency]}'`)
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
    path.resolve(__dirname, '../src/paypal/PayPalSupportedCurrency.ts'),
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
