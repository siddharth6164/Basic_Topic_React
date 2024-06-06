import React, { useCallback } from 'react'
import { useState } from 'react';
import Todos from './Todos';

function Usecallbackhook() {
  console.log('Usecallbackhook');
  const[count,setCount] = useState(0);
  const[todos,setTodos] = useState([]);

  const addTodo = useCallback(()=>{
    setTodos((prev)=>[...prev,`new Entry`])
  },[todos])

  const increment = ()=>{
    setCount(count+1);
  }

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr/>
      <div>
        Count:{count}    Todos:{todos}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Usecallbackhook