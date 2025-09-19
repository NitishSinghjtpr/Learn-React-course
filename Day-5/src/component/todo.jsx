import { useState } from "react";
// import { Linter } from "./../../node_modules/eslint/lib/types/index.d";
// import { placeholder } from "./../../node_modules/@babel/types/lib/index-legacy.d";

export const ToDo = () => {
  let [todos, setTodos] = useState(["Sample Task"]);
  let [newTodo, setNewTodo] = useState(" ");
  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    // console.log("added");
    
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
    // console.log(event.target.value);
    
  };
  let deleteTask = (index) => {
  let updatedTodos = todos.filter((_, i) => i !== index);
  setTodos(updatedTodos);
};
  return (
    <div>
      <input type="text" placeholder="add a task" onChange={updateTodoValue} name="" id="" />
      <button style={{ margin: "5px" }} onClick={addNewTask}
      >
        Add
      </button>
      <br />
      <h3>ToDo List </h3>
       <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo} 
          <button style={{ marginLeft: "10px", color: "white", background: "red", border: "none", cursor: "pointer", padding: "2px 6px"}} onClick={()=>deleteTask(index) } >delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
