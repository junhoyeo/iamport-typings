import IamportParams, {
  IamportAdditionalParams,
  IamportDisplay,
} from './IamportParams';
import IamportResponse, {
  IamportAdditionalResponse,
  IamportResponseCallback,
} from './IamportResponse';

export default interface Iamport {
  init: (accountID: string) => void;
  request_pay: (params: IamportParams, callback?: IamportResponseCallback) => void;
}

export {
  IamportParams,
  IamportAdditionalParams,
  IamportDisplay,
  IamportResponse,
  IamportAdditionalResponse,
  IamportResponseCallback,
};

declare global {
  interface Window {
    IMP?: Iamport;
  }
}
