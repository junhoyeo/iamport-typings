export enum NaverProductCategoryType {
  BOOK = 'BOOK',
  MUSIC = 'MUSIC',
  MOVIE = 'MOVIE',
  PRODUCT = 'PRODUCT',
  PLAY = 'PLAY',
  TRAVEL = 'TRAVEL',
  INSURANCE = 'INSURANCE',
  FLIGHT = 'FLIGHT',
  FOOD = 'FOOD',
  ETC = 'ETC',
}

export enum NaverProductCategoryId {
  // 공통
  GENERAL = 'GENERAL',
  USED = 'USED',
  TICKET = 'TICKET',

  // BOOK
  EBOOK = 'EBOOK',
  // GENERAL, USED

  // MUSIC
  CD = 'CD',
  LP = 'LP',
  // USED

  // MOVIE
  DVD = 'DVD',
  BLUERAY = 'BLUERAY',
  VOD = 'VOD',
  // TICKET, USED

  // PRODUCT
  CASHABLE = 'CASHABLE',
  CLAIM = 'CLAIM',
  DIGITAL_CONTENT = 'DIGITAL_CONTENT',
  SUPPORT = 'SUPPORT',

  // TRAVEL
  DOMESTIC = 'DOMESTIC',
  OVERSEA = 'OVERSEA',

  // INSURANCE
  CAR = 'CAR',
  DRIVER = 'DRIVER',
  HEALTH = 'HEALTH',
  CHILD = 'CHILD',
  TRAVELER = 'TRAVELER',
  GOLF = 'GOLF',
  ANNUITY = 'ANNUITY',
  ANNUITY_SAVING = 'ANNUITY_SAVING',
  SAVING = 'SAVING',
  VARIABLE_ANNUITY = 'VARIABLE_ANNUITY',
  CANCER = 'CANCER',
  DENTIST = 'DENTIST',
  ACCIDENT = 'ACCIDENT',
  SEVERANCE = 'SEVERANCE',
  PHONE = 'PHONE',
  PET = 'PET',

  // FOOD
  DELIVERY = 'DELIVERY',

  // ETC
  ETC = 'ETC',
}

export enum NaverPayReferrer {
  NAVER_BOOK = 'NAVER_BOOK',
  NAVER_MUSIC = 'NAVER_MUSIC',
  NAVER_SHOPPING = 'NAVER_SHOPPING',
  NAVER_MAP = 'NAVER_MAP',
  NAVER_PLACE = 'NAVER_PLACE',
  SEARCH_AD = 'SEARCH_AD',
  NAVER_SEARCH = 'NAVER_SEARCH',
  BRAND_SEARCH = 'BRAND_SEARCH',
  PARTNER_DIRECT = 'PARTNER_DIRECT',
  ETC = 'ETC',
}

/**
 * 네이버페이 상품 정보
 * @see https://github.com/iamport/iamport-manual/blob/master/NAVERPAY/sample/naverpay-pg.md#naverproducts-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0
 */
export interface NaverProduct {
  /**
   * 상품 카테고리
   * @see https://developer.pay.naver.com/docs/v2/api#etc-etc_product
   */
  categoryType: NaverProductCategoryType;
  /**
   * 상품 카테고리 상세
   * @see https://developer.pay.naver.com/docs/v2/api#etc-etc_product
   */
  categoryId: NaverProductCategoryId;
  /**
   * 고유 ID
   * 가맹점 내부의 상품 고유 ID를 활용하는 것이 일반적이지만, 네이버페이 가이드 참고가 필요합니다.
   * @see https://developer.pay.naver.com/docs/v2/api#etc-etc_product
   */
  uid: string;
  /**
   * 주문상품의 명칭
   */
  name: string;
  /**
   * 상품 주문 개수
   */
  count: number;
  /**
   * 유입 경로
   * 네이버와 사전 협의 필요
   * @see https://developer.pay.naver.com/docs/v2/api#etc-etc_product_ref
   */
  payReferrer?: NaverPayReferrer;
}

/**
 * {@link RequestPayParams}에 추가되는 네이버페이 고유 값
 * @see https://github.com/iamport/iamport-manual/blob/master/NAVERPAY/sample/naverpay-pg.md
 */
export interface RequestPayNaverAdditionalParams {
  /**
   * 이용 완료일((yyyyMMdd 형식의 문자열로 결제 당일 또는 미래의 일자여야 함).
   * @example
   * "20301231"
   */
  naverUseCfm: string;
  /**
   * 팝업 방식으로 진행 여부 (true/false)
   * @see https://github.com/iamport/iamport-manual/blob/master/NAVERPAY/sample/naverpay-pg.md#pc-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EB%B2%84%EC%A0%84%EC%97%90%EC%84%9C-%EC%A7%84%ED%96%89-%EB%B0%A9%EC%8B%9D
   */
  naverPopupMode: boolean;
  naverProducts: NaverProduct[];
}
