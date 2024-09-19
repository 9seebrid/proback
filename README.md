🚀 ProBack - REST API 백엔드 서버
ProBack은 백엔드 개발을 위한 강력하고 확장 가능한 REST API 서버입니다.
Node.js와 Express를 기반으로 하여 효율적인 데이터 처리와 보안성 높은 API를 제공합니다.

📋 프로젝트 개요
ProBack은 현대적인 웹 애플리케이션의 백엔드 서버로, 확장 가능한 구조를 통해 사용자 인증,
데이터베이스 관리, API 요청 처리 등 다양한 기능을 제공하는 프로젝트입니다.

🔑 주요 기능
사용자 인증 및 JWT 토큰 발급: JSON Web Token을 통한 보안 인증 처리
RESTful API 제공: 클린하고 유지보수 가능한 API 구조
데이터베이스 통합: MySQL과의 통합을 통해 데이터 관리
환경 변수 설정: .env 파일을 통한 환경 설정 관리
확장성 높은 코드 구조: 기능을 쉽게 추가하고 관리할 수 있는 모듈형 아키텍처

📦 기술 스택
Node.js: JavaScript 런타임 환경
Express: 경량화된 웹 프레임워크
MySQL: 관계형 데이터베이스
Sequelize: ORM(Object-Relational Mapping) 라이브러리
JWT: 토큰 기반 인증 시스템
dotenv: 환경 변수 관리

⚙️ 설치 및 실행 가이드

1. 저장소 클론
   bash
   코드 복사
   git clone https://github.com/9seebrid/proback.git
   cd proback

2. 의존성 설치
   bash
   코드 복사
   npm install

3. 환경 변수 설정
   .env 파일을 프로젝트 루트에 생성하고 아래와 같이 설정합니다:

bash
코드 복사
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=proback

JWT_SECRET=your_jwt_secret

4. 데이터베이스 마이그레이션
   bash
   코드 복사
   npx sequelize db:migrate

5. 서버 실행
   bash
   코드 복사
   npm start
   서버는 기본적으로 https://whipped.9seebird.site에서 실행됩니다.

📂 폴더 구조
'''bash
코드 복사
proback/
├── config/ # 데이터베이스 및 환경 설정
│ └── config.json # 설정 파일
├── controllers/ # API 요청 처리 로직
│ └── userController.js
├── models/ # Sequelize 모델 정의
│ └── userModel.js
├── routes/ # API 라우팅
│ └── userRoutes.js
├── middlewares/ # 인증 및 미들웨어
│ └── authMiddleware.js
├── app.js # 메인 애플리케이션 파일
└── package.json # 프로젝트 설정 파일

🎯 주요 API 엔드포인트
회원가입 및 로그인

POST /api/auth/register: 사용자 회원가입
POST /api/auth/login: 사용자 로그인 (JWT 발급)
사용자 정보 조회

GET /api/user/profile: 로그인한 사용자 정보 조회 (JWT 인증 필요)
예시 요청

bash
코드 복사
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"email":"example@test.com", "password":"password123"}'

🤝 기여 방법
이 저장소를 포크합니다.
새로운 브랜치를 생성합니다. (git checkout -b feature/new-feature)
변경사항을 커밋합니다. (git commit -m 'Add new feature')
브랜치에 푸시합니다. (git push origin feature/new-feature)
풀 리퀘스트를 제출합니다.

📜 라이선스
이 프로젝트는 MIT License 하에 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

✨ 기타 정보
문의: [9seebird@gmail.com] | GitHub Issues
Contributing: 누구든지 기여를 환영합니다!
