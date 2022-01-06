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
  pg?: string;
  pay_method?: string;
  escrow?: boolean;
  merchant_uid: string;
  name?: string;
  amount: number;
  custom_data?: any;
  tax_free?: number;
  vat?: number;
  currency?: string;
  language?: string;
  buyer_email?: string;
  buyer_name?: string;
  buyer_tel: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  notice_url?: string | string[];
  display?: Display;
}

export type RequestPayNaverParams = RequestPayParams &
  RequestPayNaverAdditionalParams;
