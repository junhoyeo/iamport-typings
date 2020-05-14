import IamportData from './IamportData';
import { IamportResponseCallback } from './IamportResponse';

interface Iamport {
  init: (accountID: string) => void;
  request_pay: (data: IamportData, callback?: IamportResponseCallback) => void;
}

export {};

declare global {
  interface Window {
    IMP: Iamport;
  }
}
