# node + react 연습용 프로젝트 백업

## node
* 참고 [생활코딩: node.js]https://opentutorials.org/module/938/6772)
1. app.js 파일 생성
2. npm install --save express (모듈 필요할 때 마다 설치하기)
3. 기본 코드 작성(express 서버 열기, 포트 설정 등)
```node
// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('node server');
});

app.listen(5000, () => {
  console.log('express server is running on port 5000');
});
```

4. 사용할 get, post 코드 

## react
* 참고1 [리액트 공식 사이트: 튜토리얼: React 시작하기](https://reactjs-kr.firebaseapp.com/tutorial/tutorial.html)
* 참고2 [React 프로젝트 작업 환경 구성 및 시작하기](https://chanhuiseok.github.io/posts/react-2/)
1. create-react-app client 으로 리액트 프로젝트 생성
2. cd client 로 작업 폴더 이동 후 작업
3. 마찬가지로 필요한 모듈 있으면 설치 (ex: axios, react-router-dom)
4. 작업 진행...

## node + react 작업할 때 주의사항
1. cors에러 해결 방법:
  1) cd server
  2) npm install --save cors
  3) app.js에 'app.use(cors())' 추가하기
