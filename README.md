# 🦀 CrabShoppingMall

간단하고 직관적인 UI로 구성된 미니 쇼핑몰 웹앱입니다. 
React 기반으로 제작되었으며, 상품 목록 확인, 상품 검색, 로그인 시 상품 상세 페이지 이동이 가능합니다.
로컬 API는 json-server를 통해 구성하여, 백엔드 없이도 RESTful한 데이터 관리를 구현했습니다.

👉 **[배포된 앱 바로가기](https://crab-shopping-mall.vercel.app/)**

## 💡 주요 기능
- 메인 페이지에서 상품 목록 확인 가능
- json-server를 활용한 **로컬 API 서버 구성**
- 상품 클릭 시 상세 페이지 이동
→ 단, **로그인한 사용자만 접근 가능**
- React Router를 활용한 페이지 이동
- 심플하고 보기 편한 쇼핑몰 UI 제공

## 🛠️ 사용 기술 스택
- **React**
- **JavaScript (ES6+)**
- **CSS**
- **React Router**
- **json-server** – db.json을 활용한 로컬 REST API
- **Vercel** (배포)

## 📁 폴더 구조 예시

src/
├── component/
│   └── Navbar.js
│   └── ProductCard.js
├── page/
│   └── Login.js
│   └── ProductAll.js
│   └── ProductDetail.js
├── route/
│   └── PrivateRoute.js
├── App.js
├── App.css
├── App.test.js
└── Login.css


## 🔄 향후 업데이트 예정
- 반응형 UI 개선
- 유저 회원가입/로그인/장바구니 기능 고도화
- 상품 추가 및 세부 작업 (종류 및 사이즈 정리)
- 상품 검색 시 목록 재배열

## 👩‍💻 만든 사람
**이유진 (@yuyu-kor)**  
응원과 피드백 언제든 환영 ✨