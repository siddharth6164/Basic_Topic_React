import React from 'react'

function HOCRed(props){
    return(
        <div style={{background:"red"}}>
            <h2><props.cmp/></h2>
            <h2>{props.name}</h2>
        </div>
    )
}

export default HOCRed