import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoBoard from "./components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import api from "./utils/api";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState('');

  const getTasks = async () => {
    const response = await api.get('/tasks');
    setTodoList(response.data.data);
  };

  const submitAddTask = (event) => {
    event.preventDefault();
    addTask();
  }

  const addTask = async() => {
    console.log(value);
    try {
      // tasks 주소로 객체를 보낸다.
      const response = await api.post('/tasks',{
        task: value,
        isComplete: false,
      });
      if(response.status === 200){
        setValue('');
        getTasks();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if(response.status === 200){
        getTasks();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const toggleComplete = async (id) => {
    try {
      const task = todoList.find((item)=>item._id === id);
      const response = await api.put(`/tasks/${id}`,{
        isComplete : !task.isComplete ,
      })
      if(response.status === 200){
        getTasks();
        console.log('완료');
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getTasks();
  },[])

  return (
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <form onSubmit={submitAddTask}>
            <input
              value={value}
              onChange={(event)=>setValue(event.target.value)}
              type="text"
              placeholder="할일을 입력하세요"
              className="input-box"
            />
          </form>
        </Col>
        <Col xs={12} sm={2}>
          <button onClick={addTask} className="button-add">추가</button>
        </Col>
      </Row>

      <TodoBoard todoList={todoList} deleteTask = {deleteTask} toggleComplete = {toggleComplete}/>
    </Container>
  );
}

export default App;
