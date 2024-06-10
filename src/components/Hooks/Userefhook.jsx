import React, { useEffect, useRef ,useState} from 'react'

function Userefhook() {
    // 1. Accessing Dom Elements
    const inputElement = useRef();
    const focusInput = () =>{
        inputElement.current.focus();
    }

    // 2. Tracking State Changes
    const[currentValue,setCurrentvalue]=useState();
    const previousValue = useRef();
    useEffect(()=>{
        previousValue.current=currentValue;
    },[currentValue])
  return (
    <div>
        <div>
            <h3>1. Accessing Dom Elements</h3>
            <hr />
            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>Focus Input</button>
            <hr />
        </div>

        <div>
            <h3>2. Tracking State Changes</h3>
            <hr />
            <input type="text" value={currentValue} onChange={(e)=>setCurrentvalue(e.target.value)} />
            <h4>current value:{currentValue}</h4>
            <h4>previous value:{previousValue.current}</h4>
        </div>
    </div>
  )
}

export default Userefhook