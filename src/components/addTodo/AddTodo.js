import React, { useState } from "react";

const AddTodo = ({addTodo}) => {
  const [todo, setTodo] = useState("");
  
  return (
    <div>
      <input
        
        placeholder="Enter Todo" value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button onClick={() => {addTodo(todo); setTodo("")}}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
