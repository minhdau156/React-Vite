import "./App.css";

import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {

  const [todoList, setTodoList] = useState([
    {id: 1, name: "Learing React"},
    {id: 2, name: "Watching Youtube"}
  ]);

  const hoidanit = "Eric";
  const data = {
    country: "VIetNam",
    address: "BinhDinh"
  }

  const addNewToDo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo]);
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewToDo={addNewToDo}/>
      <TodoData name={hoidanit} data={data}  todoList={todoList}/>
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
