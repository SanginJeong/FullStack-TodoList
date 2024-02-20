const Task = require("../model/Task");

const taskController = {};

// req는 header와 body로 구성
taskController.createTask= async (req,res)=>{
  try{
    const {task, isComplete} = req.body;
    // model 에 받아온 task,isComplete 를 넣는다.
    const newTask = new Task({task,isComplete});
    await newTask.save();
  
    // 200이면 json안 객체를 보낸다.
    res.status(200).json({status: 'ok', data: newTask});
  }
  catch(error){
    res.status(400).json({status:'fail', error: error})
  }
}

taskController.getTask = async(req,res)=>{
  try {
    const taskList = await Task.find({}).select("-__v");
    res.status(200).json({status:'ok', data: taskList});
  } catch (error) {
    res.status(400).json({status:'fail', data: error})
  }
}

// taskController.updateTask = async(req,res)=>{
//   try {
//     // Task에서 클라이언트에서 요청한 id와 같은 객체를 찾아서 task에 저장.
//     const task = await Task.findById(req.params.id);
//     if(!task){
//       throw new Error("Cannot find the task");
//     }
//     const fields = Object.keys(req.body); // ['task', 'isComplete']
    
//     // req.body는 업데이트할 객체
//     // req.body의 각 item(키) 의 value를 해당 id 객체인 task에 덮어씌우겠다.
//     fields.map((item)=> task[item] = req.body[item]);
//     await task.save();
//     res.status(200).json({status:'Ok', data: task});
//   } catch (error) {
//     res.status(400).json({status: 'fail',error})
//   }
// }

// 위 코드 getUpdate로 변환하기
taskController.updateTask = async(req,res)=>{
  try {
    const { id } = req.params;
    const { task, isComplete } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id,{
      task : task,
      isComplete: isComplete,
    })
    res.status(200).json({status:'Ok', data: updatedTask})
  } catch (error) {
    res.status(400).json({status:"fail",error});
  }
}

taskController.deleteTask = async(req,res)=>{
  try {
    const deleteItem = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({status:'Ok',data:deleteItem});
  } catch (error) {
    res.status(400).json({status:"fail",error});
  }
}
module.exports = taskController;