import React,{useRef, useState,useEffect} from 'react'

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
    

    <div className='w-full flex '>
      <form onSubmit={submitHndeler}>
        {props.edit ?
          <>
              <input 
               onChange={changHandeler}
                className="border-1 border-r-sky-500"
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
              className="border-4 border-red-600 " 
              type="text" 
              value={input}
               placeholder='add Todo...' 
               ref={inputRef}
               />
            <button  type='submit'>add</button>
          </>
      }

        
      </form>
      
    </div>
  )
}

export default TodoForm