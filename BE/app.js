const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// 정의한 라우터 갖고오기
const indexRouter = require('./routes/index');

const app = express();

// bodyParser 를 사용하여 객체형태로 불러옴
app.use(bodyParser.json());
app.use(cors());

// /api라는 주소로 가면 indexRouter를 사용한다
// /api => index => /tasks => 라우팅  구조
app.use('/api',indexRouter)
const mongoURI = 'mongodb://localhost:27017/todo-demo';

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

