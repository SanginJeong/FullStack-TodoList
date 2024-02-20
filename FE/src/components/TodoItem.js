import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item , deleteTask, toggleComplete}) => {
  
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? 'button-delete-color' : null}`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button onClick={()=>{deleteTask(item._id)}} className="button-delete">DELETE</button>
            <button onClick={()=>{toggleComplete(item._id)}} className="button-delete">{item.isComplete ? 'DONE' : 'NOT DONE'}</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
