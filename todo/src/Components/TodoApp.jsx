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
    <div className="flex flex-col h-screen  items-center ">
      <div className='flex justify-center items-center flex-col my-8'>
        <p className='text-sky-400 text-4xl '>To-do List</p>
        <p className='text-pink-400 text-lg font-mono'>Simple App to manage your daily to-dos</p>
      </div>
      <div className=' bg-cyan-100  w-[350px] md:w-[500px] flex flex-col items-center p-8 shadow-md shadow-gray-300 rounded-lg'>
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
        
    </div>
  )
}

export default TodoApp