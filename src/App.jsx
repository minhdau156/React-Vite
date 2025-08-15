import "./App.css";

import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";
const App = () => {
  const hoidanit = "Eric";
  const data = {
    country: "VIetNam",
    address: "BinhDinh"
  }

  const addNewToDo = () => {
    alert("call me");
  }

  
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewToDo={addNewToDo}/>
      <TodoData name={hoidanit} data={data}  />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
