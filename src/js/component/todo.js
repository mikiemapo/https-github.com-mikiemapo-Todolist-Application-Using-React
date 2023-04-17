import React, { useEffect, useState } from "react";

export default function Todo() {
  const [task, setTask] = useState([]);
  const [newTodo, setNewTodo] = useState([
    "do something",
    "do something else",
    "do something again",
  ]);
  let todoI = newTodo.map((item, index) => {
    return (
      <li key={index}>
        {item}
        <div
          className="remove"
          // this where put onclick remove task use filter
        >
          x
        </div>
      </li>
    );
  });

  const addTodo = (onKeyDownEvent) => {
    if (onKeyDownEvent.key === "Enter") {
        const newTask = [...newTodo, task];
        setNewTodo(newTask);
        setTask(""); 

    }
  }

  return (<div className="spawnC">
    <h1>Todo List</h1>
    <div className="Main">
        <input className="input"
        placeholder="please enter task" 
        value={task}
        onChange = {(event) => setTask(event.target.value)}
        type="text"
        onKeyDown={addTodo}
        />
    </div>
    <ul>
        {todoI}
    </ul>
    <div>
        {todoI.length} task left 
    </div>
  </div>);
}
