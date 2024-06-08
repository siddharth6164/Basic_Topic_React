import React from 'react'

function HOCGreen(props){
        return (
            <div style={{background:"green"}}>
                <h2><props.cmp/></h2>
                <h2>{props.name}</h2>
            </div>
        )
    }

export default HOCGreen