import React, { useState } from 'react'
import Todo from "../Components/Todo"
import TodoForm from './TodoForm';
import { FcInfo } from "react-icons/fc";

function TodoList({todos,onComplete,onDelete,onUpdate}) {

    //
      const [edit,setEdite]=useState({id:null,text:"",isCompleted:false})

      function editTodoHandeler(newValue){
        onUpdate(edit.id,newValue)
        setEdite({id:null,text:""})
      }
    //

    const renderTodo=()=>{
      if(todos.length===0)return<p className='flex justify-center items-center mt-4 border px-5 py-2 bg-blue-200 rounded-lg font-mono'> <FcInfo className='mr-1 w-6 h-4'/>add some todos</p>;
  return (
    <>
      {
      todos.map((todo)=>{
        return(
        <Todo
         key={todo.id}
          todo={todo} 
          onComplete={()=>onComplete(todo.id)}
          onDelete={()=>onDelete(todo.id)}
          //
          onEdit={()=>setEdite(todo)}
          //
          
          />
        );
      })
       }
      </>
  )
    }  

    return <div>{edit.id  ? <TodoForm addTodoHandeler={editTodoHandeler} edit={edit}/> : renderTodo()}</div>

  
}

export default TodoList