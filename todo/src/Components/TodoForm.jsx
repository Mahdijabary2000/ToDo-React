import React,{useRef, useState,useEffect} from 'react'
import { FaPlus } from "react-icons/fa";

function TodoForm(props) {

  
  const [input,setInput]=useState(props.edit ? props.edit.text : "" )

  const inputRef=useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, []);
  


  function changHandeler(e){
      
      setInput(e.target.value)
    };

    function submitHndeler(e){
      e.preventDefault();
      if(!input){
        alert("entet todo")
        return;
      };

      props.addTodoHandeler(input)
      setInput("")

    }
  return (
    

    <div className='w-full flex justify-center'>
      <form onSubmit={submitHndeler}>
        {props.edit ?
          <>
              <input 
              className='border-4 '
               onChange={changHandeler}
                 type="text" value={input} 
                   placeholder='update Todo...' 
                   ref={inputRef}
                   />
              <button  type='submit'>update</button>
          </>
          
          :

          <>
            <input
              onChange={changHandeler}
              className='border-2  rounded-md py-2 px-4 outline-2 outline-sky-600'
              type="text" 
              value={input}
               placeholder='add Todo...' 
               ref={inputRef}
               />
            <button className='border-2 bg-pink-300 py-4 px-2 rounded-lg' type='submit'><FaPlus/></button>
          </>
      }

        
      </form>
      
    </div>
  )
}

export default TodoForm