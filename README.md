<h1 align="center">
  <img alt="credit-card" src="https://em-content.zobj.net/source/microsoft-teams/363/credit-card_1f4b3.png" width="128px" /><img alt="man-mage" src="https://em-content.zobj.net/source/microsoft-teams/363/man-mage_1f9d9-200d-2642-fe0f.png" width="128px" /> <br />
  Iamport Typings
</h1>

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/iamport-typings">
    <img alt="" src="https://img.shields.io/npm/v/iamport-typings.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="NPM downloads" href="https://github.com/">
    <img alt="" src="https://img.shields.io/npm/dt/iamport-typings?style=for-the-badge&labelColor=000">
  </a>
  <a aria-label="License" href="https://www.npmjs.com/package/iamport-typings">
    <img alt="" src="https://img.shields.io/npm/l/iamport-typings.svg?style=for-the-badge&labelColor=000000">
  </a>
</p>

> 국내 PG 결제연동 서비스, [포트원(구 아임포트)](https://portone.io)를 위한 타입스크립트 타입 선언을 제공합니다.

## ⚔️ 사용하는 곳

<p align="center">
  <a href="https://pocketlesson.com">
    <img src="https://user-images.githubusercontent.com/7247848/148687957-9102924d-5282-4526-a8c6-baddd9f26c39.png" align="center" height="50" alt="PocketLesson" hspace="16">
   </a>
</p>

## 📦 설치

```bash
npm install -D iamport-typings
# Or using yarn
yarn add -D iamport-typings
```

패키지를 설치합니다.

## 📌 로드맵

메소드별 지원 상황입니다. PR은 언제나 환영! 🙌

- [x] `init`
- [x] `request_pay`
- [ ] `agency`
- [ ] `certification`
- [ ] `close`
- [ ] `communicate`
- [ ] `naver_zzim`

## 🚀 사용 방법

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["iamport-typings"]
  }
}
```

사용할 프로젝트 루트 디렉토리에 있는 `tsconfig.json` 파일의 `compilerOptions.types`에 `iamport-typings`를 추가하기만 하면 끝!

```tsx
const { IMP } = window;
```

`Window` 인터페이스를 확장하기 때문에, 기존처럼 위와 같이 바로 사용할 수 있답니다! 😋

```tsx
import { RequestPayParams, RequestPayResponse } from 'iamport-typings';

const onClickPayment = () => {
  const { IMP } = window;
  IMP.init('your_imp_uid');

  const params: RequestPayParams = {
    ...
  };

  IMP.request_pay(params, onPaymentAccepted);
};

const onPaymentAccepted = (response: RequestPayResponse) => {
  const { imp_uid, merchant_uid } = response;
  console.log(imp_uid, merchant_uid);
};
```

위와 같이 각각의 인터페이스를 가져와 사용하는 것도 가능합니다.

| 인터페이스 이름                | 설명                                                                                                                               |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `Iamport`                      | 아임포트 객체                                                                                                                      |
| `RequestPayParams`             | `request_pay` 메소드를 위한 결제 승인에 필요한 정보를 담고 있는 객체로, `RequestPayAdditionalParams`에서 확장됨                    |
| `RequestPayAdditionalParams`   | `request_pay` 메소드를 위한 추가 속성                                                                                              |
| `Display`                      | `RequestPayParams`에 선택적으로 포함되는, 구매자에게 제공되는 결제창 화면에 대한 UI 옵션                                           |
| `RequestPayResponse`           | 결제 결과의 정보를 담고 있는 객체로, `request_pay` 메소드에 지정되는 콜백 함수의 인자로, `RequestPayAdditionalResponse`에서 확장됨 |
| `RequestPayAdditionalResponse` | `request_pay` 메소드의 콜백을 위한 추가 속성                                                                                       |
| `RequestPayResponseCallback`   | `request_pay` 메소드의 함수 타입 리터럴                                                                                            |
