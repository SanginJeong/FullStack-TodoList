const express = require('express');
const router = express.Router();
const taskApi = require('./task.api');
const userApi = require('./user.api');
// /tasks 주소로 가면 taskApi를 사용한다.
// taskApi 를 사용하면 post,get,push,delete 등의 기능이 라우터마다 정의되어있다.
router.use('/tasks', taskApi);
router.use('/user',userApi);


module.exports = router;