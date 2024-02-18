const express = require('express');
const taskController = require('../controller/task.controller');
const router = express.Router();

router.post('/', taskController.createTask);

router.get('/',taskController.getTask);

router.put('/:id', taskController.getUpdate);

router.delete('/:id', taskController.getDelete);

// router를 다른 데로 내보낸다.
module.exports = router;

