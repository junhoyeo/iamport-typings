import { PaymentMethod } from './PaymentMethod';
import { Pg } from './Pg';
import { RequestPayNaverAdditionalParams } from './RequestPayNaverParams';
import { CardCode } from './card/CardCode';
import { PayPalSupportedCurrency } from './paypal/PayPalSupportedCurrency';

export interface RequestPayAdditionalParams {
  digital?: boolean;

  /**
   * `vbank_due`: 가상계좌 입금기한
   * - 결제수단이 가상계좌인 경우 입금기한을 설정할 수 있습니다.
   * - 다음과 같은 형식으로 설정이 가능합니다:
   * @example
   * - `YYYY-MM-DD`
   * - `YYYYMMDD`
   * - `YYYY-MM-DD HH:mm:ss`
   * - `YYYYMMDDHHmmss`
   */
  vbank_due?: string;

  m_redirect_url?: string;
  app_scheme?: string;
  biz_num?: string;
}

export type EscrowProduct = {
  id: string;
  name: string;
  code: string;
  unitPrice: number;
  quantity: number;
};

export type Currency = 'KRW' | 'USD' | 'EUR' | 'JPY' | PayPalSupportedCurrency;

export type Language = 'en' | 'ko' | 'zh';

export interface RequestPayParams extends RequestPayAdditionalParams {
  /**
   * `pg`
   * - `PG사코드` 및 `PG사코드.{상점ID}` 형태로 지정할 수 있습니다.
   */
  pg?: Pg | `${Pg}.${string}`;

  pay_method?: PaymentMethod;
  escrow?: boolean;

  /**
   * `escrowProducts`: 에스크로 결제 정보
   * - 에스크로 결제(`escrow: true`)시에만 유효하고, 필수 값은 아닙니다.
   * - 토스페이먼츠 신모듈 (pg: `tosspayments.~`)시에만 유효합니다.
   * - 1개의 주문 건에 여러 상품이 결제될 때 상품에 따라 배송이 다르게 이루어지는 경우, 1개의 주문에 여러 배송 정보를 넣기 위해 필요합니다.
   */
  escrowProducts?: EscrowProduct[];

  customer_uid?: string;
  merchant_uid: string;
  name?: string;
  amount: number;
  custom_data?: any;
  tax_free?: number;

  /**
   * `vat` (`number`)
   * @deprecated `vat` 대신 `vat_amount` 를 사용해 주세요.
   */
  vat?: number;

  /**
   * `vat_amount` (`number | null`)
   * - 결제 금액 중 부가세
   * - 지원되는 PG사: 나이스페이먼츠, (신) 토스페이
   * @default null
   */
  vat_amount?: number | null;

  currency?: Currency;
  language?: Language;

  buyer_email?: string;
  buyer_name?: string;
  buyer_tel: string;
  buyer_addr?: string;
  buyer_postcode?: string;

  confirm_url?: string;
  notice_url?: string | string[];

  display?: {
    /**
     * `display.card_quota`: 지원 할부개월 수
     * - 할부결제는 5만원 이상 결제 요청시에만 이용 가능합니다.
     * @example
     * []: 일시불만 결제 가능
     * @example
     * [2, 3, 4, 5, 6]: 일시불을 포함한 2, 3, 4, 5, 6 개월까지 할부개월 선택 가능
     */
    card_quota?: number[];
  };

  card?: {
    direct?: {
      code: CardCode;
      quota: number;
    };
    detail?: {
      card_code: CardCode;
      enabled: boolean;
    }[];
  };
}

export type RequestPayNaverParams = RequestPayParams &
  RequestPayNaverAdditionalParams;
