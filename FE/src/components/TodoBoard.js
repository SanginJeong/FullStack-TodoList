import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteTask, toggleComplete }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {
        todoList.length === 0 
        ? <h2>There is no Item to show</h2> 
        :  todoList.map((item)=> <TodoItem item = { item } deleteTask = {deleteTask} toggleComplete = {toggleComplete}/>)
      }
      
    </div>
  );
};

export default TodoBoard;
