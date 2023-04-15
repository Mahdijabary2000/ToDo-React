import React,{useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';


function TodoApp() {
  const [todos, setTodos] = useState([])

  function addTodoHandeler(input){
    const newTodo={
      id:Math.floor(Math.random()*1000),
      text:input,
      isCompleted:false,
    };

    setTodos([...todos , newTodo])

  };


  function completeHandeler(id){
    const index=todos.findIndex((todo)=>todo.id===id)
    const selectTodo={...todos[index]}
    selectTodo.isCompleted=!selectTodo.isCompleted
    const updateTodos=[...todos]
    updateTodos[index]=selectTodo;
    setTodos(updateTodos)
  }


  function deleteHandeler(id){
    console.log(id);
    const filterTodos=todos.filter((todo)=>todo.id!==id)
    setTodos(filterTodos)
  }

  
//
  function updateHandeler(id,newValue){
    console.log(id);
    const index=todos.findIndex((todo)=>todo.id===id)
    const selectTodo={...todos[index]}
    selectTodo.text=newValue
    const updateTodos=[...todos]
    updateTodos[index]=selectTodo;
    setTodos(updateTodos)

  }
//
  return (
    <div>
        <TodoForm addTodoHandeler={addTodoHandeler}/>
        <TodoList 
        todos={todos}
         onComplete={completeHandeler}
         onDelete={deleteHandeler}
         //
         onUpdate={updateHandeler}
        // 
         />
        
    </div>
  )
}

export default TodoApp