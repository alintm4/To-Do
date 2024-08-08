import React, { useState } from "react";
import Todo from "./Todo";

function Todoform({ item }) {
  const [dataitem, setDataItem] = useState();

  const submitfncn = (e) => {
    e.preventDefault();
    item(dataitem);
    setDataItem("");
  };
  return (
    <form onSubmit={submitfncn} >
      <h1
        className=" text-white block 
        font-bold text-3xl mb-4 
        "
      >
        Manage your Todo's
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter your task.."
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
          AddTask
        </button>
      </div>
    </form>
  );
}

export default Todoform;
