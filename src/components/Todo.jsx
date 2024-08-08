import React from "react";


function Todo({ tasks,deleteTask,editTask }) {
    
  return (
    <> 
    <div
      className=" bg-black max-w-80 text-white
         text-xl mt-4
        "
    >
      <div className="flex">
        <div>
          <span className="flex-row">{tasks.tasks}</span>
        </div>
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
