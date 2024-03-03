import {
  RequestPayParams,
  RequestPayAdditionalParams,
} from './RequestPayParams';
import {
  RequestPayResponse,
  RequestPayAdditionalResponse,
  RequestPayResponseCallback,
} from './RequestPayResponse';

export default interface Iamport {
  init: (accountID: string) => void;
  request_pay: (
    params: RequestPayParams,
    callback?: RequestPayResponseCallback,
  ) => void;
}

export {
  RequestPayParams,
  RequestPayAdditionalParams,
  RequestPayResponse,
  RequestPayAdditionalResponse,
  RequestPayResponseCallback,
};
export {
  Currency,
  Language,
  EscrowProduct,
  RequestPayNaverParams,
} from './RequestPayParams';
export { Pg } from './Pg';
export { PaymentMethod } from './PaymentMethod';
export { CardCode } from './card/CardCode';
export { PayPalSupportedCurrency } from './paypal/PayPalSupportedCurrency';
export {
  NaverProductCategoryType,
  NaverProductCategoryId,
  NaverPayReferrer,
  NaverProduct,
  RequestPayNaverAdditionalParams,
} from './naver/RequestPayNaverParams';

declare global {
  interface Window {
    IMP?: Iamport;
  }
}
