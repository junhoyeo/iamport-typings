import { PaymentMethod } from './PaymentMethod';
import { Pg } from './Pg';
import { RequestPayNaverAdditionalParams } from './RequestPayNaverParams';

export interface RequestPayAdditionalParams {
  digital?: boolean;
  vbank_due?: string;
  m_redirect_url?: string;
  app_scheme?: string;
  biz_num?: string;
}

export interface Display {
  card_quota?: number[];
}

export interface RequestPayParams extends RequestPayAdditionalParams {
  pg?: Pg;
  pay_method?: PaymentMethod;
  escrow?: boolean;

  /**
   * `escrowProducts`: 에스크로 결제 정보
   * 에스크로 결제(escrow: true)시에만 유효하고, 필수 값은 아닙니다.
   * 토스페이먼츠 신모듈 (pg: tosspayments.~)시에만 유효합니다.
   * 1개의 주문 건에 여러 상품이 결제될 때 상품에 따라 배송이 다르게 이루어지는 경우, 1개의 주문에 여러 배송 정보를 넣기 위해 필요합니다.
   */
  escrowProducts?: {
    id: string;
    name: string;
    code: string;
    unitPrice: number;
    quantity: number;
  }[];

  customer_uid?: string;
  merchant_uid: string;
  name?: string;
  amount: number;
  custom_data?: any;
  tax_free?: number;

  /**
   * @deprecated `vat` 대신 `vat_amount` 를 사용해 주세요.
   */
  vat?: number;

  /**
   * `vat_amount` (number | null): 부가세
   * 결제 금액 중 부가세(기본값: null)
   * 지원되는 PG사: 나이스페이먼츠, (신) 토스페이
   */
  vat_amount?: number | null;
  currency?: string;
  language?: string;
  buyer_email?: string;
  buyer_name?: string;
  buyer_tel: string;
  buyer_addr?: string;
  buyer_postcode?: string;

  confirm_url?: string;
  notice_url?: string | string[];
  display?: Display;
}

export type RequestPayNaverParams = RequestPayParams &
  RequestPayNaverAdditionalParams;
