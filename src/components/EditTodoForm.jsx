import React,{useState} from 'react'

function EditTodoForm({editTask,tasks}) {
    const [dataitem, setDataItem] = useState(tasks.tasks);

    const submitfncn = (e) => {
      e.preventDefault();
      editTask(dataitem,tasks.id)
    };
    return (
      <form onSubmit={submitfncn}>
        <h1
          className=" text-black block 
          font-bold text-3xl mb-4 
          "
        >
          Edit your Todo
        </h1>
        <div>
          <input
            type="text"
            placeholder="Edit Task.."
            className=" p-1"
            value={dataitem}
            onChange={(e) => {
              setDataItem(e.target.value);
            }}
          />{" "}
          <button type="submit"
            className="bg-blue-400
           text-white rounded cursor-pointer 
           w-20 hover:bg-green-400 hover:text-black p-1 "
          >
            Edit Task
          </button>
        </div>
      </form>
    )
}

export default EditTodoForm
