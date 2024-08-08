import React from "react";


function Todo({ tasks,deleteTask,editTask ,taskCompleted}) {
    
  return (
    <> 
    <div
      className=" bg-black max-w-80 text-white
         text-xl mt-4
        "
    >
      <div className="flex">
        
      <p
  className={`cursor-pointer ${
    tasks.completed
      ? "text-purple-300 line-through" // Tailwind color for completed tasks
      : "text-white" // Tailwind color for incompleted tasks
  }`}
  onClick={() => taskCompleted(tasks.id)}
>
  {tasks.tasks}
</p>
       
        <div className="ml-auto">
          <button type="submit" onClick={()=>{
            editTask(tasks.id)
          }}>{"✏️"}</button>
           <button type="submit" onClick={()=>{
            deleteTask(tasks.id)
        }}>{"🗑️"}</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Todo
