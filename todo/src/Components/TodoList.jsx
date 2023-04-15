import React, { useState } from 'react'
import Todo from "../Components/Todo"
import TodoForm from './TodoForm';

function TodoList({todos,onComplete,onDelete,onUpdate}) {

    //
      const [edit,setEdite]=useState({id:null,text:"",isCompleted:false})

      function editTodoHandeler(newValue){
        onUpdate(edit.id,newValue)
        setEdite({id:null,text:""})
      }
    //

    const renderTodo=()=>{
      if(todos.length===0)return<p>add some todos</p>;
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