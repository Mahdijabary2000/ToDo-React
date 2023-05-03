import React from 'react'
import {FaRegEdit,FaTrashAlt } from "react-icons/fa";

function todo({todo ,onComplete,onDelete,onEdit}) {
  return (
    <div className='w-[400px] h-[50px]  bg-sky-200 text-sky-400 text-xl flex justify-between items-center mt-4 px-2 rounded-md '  >
          <div onClick={onComplete} className={todo.isCompleted ? "line-through text-slate-500	" : ""}>{todo.text}</div>
          <div className='flex justify-center'>
              <button onClick={onEdit} className="text-pink-500" ><FaRegEdit className='w-4 h-7'/></button>
              <button onClick={onDelete} className="text-pink-500 pl-2" ><FaTrashAlt  className='w-3 h-4'/></button>
          </div>
        </div>
  )
}

export default todo