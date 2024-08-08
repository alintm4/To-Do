import React, { useState } from "react";
import Todoform from "./Todoform";
import Todo from "./Todo";
import {v4 as uuidv4} from 'uuid';
import EditTodoForm from "./EditTodoForm";

function Todoall() {
  const [todos, setTodo] = useState([]);


  const item = (todo) => {
    if(todo.trim()){
      setTodo([...todos, { id:uuidv4(), tasks: todo, isEditing:false,completed:false,
      }]);
    }
    else{
window.alert("task cannot be empty")
    }
    
  }


  const taskCompleted=(id)=>{
    setTodo(
      todos.map((todo)=>
        todo.id === id ? {...todo, completed : ! todo.completed}:todo

      )
    )

  }

  const deleteTask=(id)=>{
    setTodo(todos.filter((todo)=> todo.id !== id))
  }
  const editTask= (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  const editTasks = (tasks, id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, tasks, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div
      className=" bg-orange-400 
        m-auto mt-8 p-10  
         justify-center items-center
          max-w-lg w-full rounded-xl "
    >
      <Todoform item={item} />

      {todos.map((todo) => 
      todo.isEditing ? (
      <>
      <EditTodoForm editTask={editTasks} tasks={todo}/>
      </>) :
      
      ( 
        <Todo tasks={todo } 
        key={todo.id} 
        deleteTask={deleteTask}
        editTask={editTask}
        taskCompleted={taskCompleted}
        />
      )) }
    </div>
  );
}

export default Todoall;
