ProBack

ProBack은 백엔드 개발을 위한 강력한 REST API 서버 프로젝트입니다.
이 프로젝트는 최신 웹 개발 기술을 활용하여 확장 가능하고 안정적인 백엔드 솔루션을 제공합니다. 다양한 기능을 쉽게 추가할 수 있도록 설계되어 있으며, 빠른 개발을 지원합니다.

주요 기능
사용자 인증 및 권한 관리: JWT(JSON Web Token)를 활용한 인증 시스템
RESTful API: 클린한 구조의 REST API 제공
데이터베이스 관리: MySQL과의 연동을 통해 효율적인 데이터 관리
환경 구성: .env 파일을 통해 손쉬운 환경 변수 설정
로그 관리: 서버 로그를 관리하고, 오류를 추적할 수 있는 시스템
확장성: 모듈식 구조로 기능을 쉽게 추가할 수 있음

기술 스택
Node.js: 서버 사이드 로직 구현
Express: 경량화된 웹 프레임워크
MySQL: 관계형 데이터베이스
Sequelize: MySQL과의 상호작용을 위한 ORM(Object-Relational Mapping) 라이브러리
JWT: 사용자 인증 및 권한 부여를 위한 토큰 기반 인증
dotenv: 환경 변수 관리

설치 및 실행

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
   프로젝트 루트에 .env 파일을 생성하고, 아래의 내용을 참고하여 설정합니다.

makefile
코드 복사
DB_HOST=localhost
DB_USER=userid
DB_PASSWORD=yourpassword
DB_NAME=db_name
SECRET_KEY= SECRET_KEY

4. 데이터베이스 마이그레이션
   bash
   코드 복사
   npx sequelize db:migrate

5. 서버 실행
   bash
   코드 복사
   npm start
   서버는 기본적으로 https://whipped.9seebird.site에서 실행됩니다.

사용법
회원가입 및 로그인

/api/auth/register: 사용자 회원가입 API
/api/auth/login: 사용자 로그인 API (JWT 토큰 발급)

사용자 정보
/api/user/profile: 사용자 프로필 조회 (인증 필요)
예시 요청

라이선스
이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
