# Iamport Typings
> 💳✨📘 국내 PG 결제연동 서비스, [아임포트](https://www.iamport.kr/)를 위한 타입스크립트 타입 선언을 제공합니다.

## 📦 설치

```bash
npm install -D iamport-typings
# Or using yarn
yarn add -D iamport-typings
```

패키지를 설치합니다.

## 🚀 사용 방법

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": [
      "iamport-typings"
    ]
  }
}
```

사용할 프로젝트 루트 디렉토리에 있는 `tsconfig.json` 파일의 `compilerOptions.types`에 `iamport-typings`를 추가하기만 하면 끝!

```tsx
const { IMP } = window;
```

`Window` 인터페이스를 확장하기 때문에, 기존처럼 위와 같이 바로 사용할 수 있답니다! 😋
