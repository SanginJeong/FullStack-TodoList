const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// 정의한 라우터 갖고오기
const indexRouter = require('./routes/index');
require('dotenv').config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

const app = express();

// bodyParser 를 사용하여 객체형태로 불러옴
app.use(bodyParser.json());
app.use(cors());

// /api라는 주소로 가면 indexRouter를 사용한다
// /api => index => /tasks => 라우팅  구조
app.use('/api',indexRouter)
// const mongoURI = MONGODB_URI_PROD;
const mongoURI = "mongodb://localhost:27017/todo-demo";

// {useNewUrlParser:true} : 최신 형식도 사용할 수 있도록
mongoose.connect(mongoURI,{useNewUrlParser:true})
.then(()=>{
  console.log('mongoose connected');
})
.catch((error)=>{
  console.log('mongoose connection fail', error);
})


app.listen(5000, ()=>{
  console.log('server on portNum : 5000');
})

// 회원가입
// 유저가 이메일, 패스워드, 유저이름을 입력해서 보낸다.
// BE에서 받은 정보를 저장한다. (데이터베이스 모델 필요함)
// 패스워드를 암호화 시켜서 저장한다. (보안 이슈)

// 1.라우터
// 2.모델
// 3.데이터 저장(이미 가입된 유저 유무,패스워드 암호화)


