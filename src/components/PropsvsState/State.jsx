import React,{useState}from 'react'

function State() {
    const[someDate,setSomedata] =useState(0);
    const functioncall =(event)=>{setSomedata(event.target.value)}
    return (
        <div>
            State
            <input type="text" value={someDate} onChange={functioncall}/>
            {someDate}
        </div>
    )
}

export default State