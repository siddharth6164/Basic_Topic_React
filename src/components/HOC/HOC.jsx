import React, { useState } from 'react'
import HOCRed from './HOCRed.jsx';
import HOCGreen from './HOCGreen.jsx';

//HOC Component
function Counter(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>update</button>
        </div>
    )
}

function HOC() {
  return (
    <div>
        <h3>HOC</h3>
        <HOCRed cmp={Counter} name={"Reusing Components"}/>
        <HOCGreen cmp={Counter} name={"Reusing Components"}/>
    </div>
  )
}

export default HOC