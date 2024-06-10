import React, { useReducer } from "react";

const initialState = 0;
const reducer =(state,action)=>{
    switch (action.type){
        case "Increment":
            return state=state + 1
        case "Decrement":
            return state=state - 1
        case "Add":
            return state = state+25
        case "Zero":
            return state =0
        }
}

function Usereducerhook() {

    const[state,dispatch]=useReducer(reducer,initialState);
    return(
        <div>
            <p>{state}</p>
            <button onClick={()=>dispatch({type:'Increment'})}>+</button>
            <button onClick={()=>dispatch({type:'Decrement'})}>-</button>
            <button onClick={()=>dispatch({type:'Add'})}>Add+25</button>
            <button onClick={()=>dispatch({type:"Zero"})}>0</button>
        </div>
    );
}

export default Usereducerhook;
