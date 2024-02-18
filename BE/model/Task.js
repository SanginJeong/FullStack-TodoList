// 스키마 정의
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
  task:{
    type:String,
    required:true,
  },
  isComplete:{
    type:Boolean,
    required:true,
  }
},{timestamps:true})
// timestamps : 데이터가 생성된 순서대로 정렬해주는 기능

const Task = mongoose.model("Task",taskSchema);

module.exports = Task;