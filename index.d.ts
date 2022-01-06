import {
  RequestPayParams,
  RequestPayAdditionalParams,
  Display,
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
  Display,
  RequestPayResponse,
  RequestPayAdditionalResponse,
  RequestPayResponseCallback,
};

declare global {
  interface Window {
    IMP?: Iamport;
  }
}
