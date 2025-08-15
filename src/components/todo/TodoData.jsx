const TodoData = (props) => {
  const { name, data } = props;
  
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>Learing React</div>
      <div>
        {JSON.stringify(props.todoList)}
      </div>
    </div>
  );
};

export default TodoData;
