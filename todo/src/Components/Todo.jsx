import React from 'react'

function todo({todo ,onComplete,onDelete,onEdit}) {
  return (
    <div >
          <div onClick={onComplete} className={todo.isCompleted ? "line-through text-slate-500	" : ""}>{todo.text}</div>
          <div>
              <button onClick={onEdit} className="border-2 border-indigo-500 text-indigo-300 " >Edit</button>
              <button onClick={onDelete} className="border-2 border-indigo-500 text-indigo-300" >Delete</button>
          </div>
        </div>
  )
}

export default todo