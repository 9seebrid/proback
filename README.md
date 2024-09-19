🚀 ProBack - Powerful REST API Backend
ProBack는 백엔드 개발을 위한 현대적인 REST API 서버로, Node.js와 Express를 기반으로 구축되었습니다. 확장 가능하고 보안이 강화된 API를 제공하며, 다양한 기능을 손쉽게 추가할 수 있는 구조를 갖추고 있습니다.

📚 프로젝트 개요
ProBack은 효율적인 데이터 처리를 위한 백엔드 솔루션입니다. 사용자 인증, 데이터베이스 관리 및 API 요청 처리와 같은 주요 기능을 제공하며, 최신 기술 스택을 활용해 빠른 개발을 지원합니다.

🔑 주요 기능
JWT 기반 인증 시스템: 사용자 인증 및 권한 부여
RESTful API 제공: 유지보수하기 쉬운 API 아키텍처
MySQL 통합: 효율적인 데이터베이스 관리
환경 변수 관리: .env 파일을 통한 손쉬운 설정
확장 가능성: 모듈식 설계로 기능을 쉽게 추가 가능

🛠️ 기술 스택
Node.js: 서버 사이드 런타임 환경
Express: 빠르고 경량화된 웹 프레임워크
MySQL: 관계형 데이터베이스
Sequelize: ORM(Object-Relational Mapping) 라이브러리
JWT: 사용자 인증을 위한 토큰 기반 인증
dotenv: 환경 변수 관리 라이브러리

⚙️ 설치 및 실행 가이드

1. 저장소 클론

```bash
코드 복사
git clone https://github.com/9seebrid/proback.git
cd proback
```

2. 의존성 설치

```bash
코드 복사
npm install
```

3. 환경 변수 설정
   .env 파일을 프로젝트 루트에 생성하고 아래와 같이 설정합니다:

```bash
코드 복사
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=proback
JWT_SECRET=your_jwt_secret
```

4. 데이터베이스 마이그레이션

```bash
코드 복사
npx sequelize db:migrate
```

5. 서버 실행

```bash
코드 복사
npm start
서버는 기본적으로 http://localhost:3000에서 실행됩니다.
```

📂 폴더 구조

```bash
코드 복사
proback/
├── config/            # 데이터베이스 및 환경 설정
├── controllers/       # API 요청 처리 로직
├── models/            # Sequelize 모델 정의
├── routes/            # API 라우팅
├── middlewares/       # 인증 및 미들웨어
└── app.js             # 메인 애플리케이션 파일
```

🎯 주요 API 엔드포인트
회원가입 및 로그인

POST /api/auth/register: 사용자 회원가입
POST /api/auth/login: 사용자 로그인 (JWT 발급)
사용자 정보 조회

GET /api/user/profile: 로그인한 사용자 정보 조회 (JWT 인증 필요)

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
