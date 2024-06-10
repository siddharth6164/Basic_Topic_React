import React,{useState} from 'react'

function Usestatehook() {
    const[count,setCount] = useState(0);
    const funcationcall=()=>{
        setCount(count+1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={funcationcall}>Click me</button>
        </div>
    )
}

export default Usestatehook