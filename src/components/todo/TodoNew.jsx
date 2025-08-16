import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("");

  const { addNewToDo } = props;

  const handleClick = () => {
    addNewToDo(valueInput);
    setValueInput("");
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        value={valueInput}
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>My name is = {valueInput}</div>
    </div>
  );
};
export default TodoNew;
