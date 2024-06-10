import React from 'react'
function Item({name,isPacked}){
    if(isPacked){
        return <li style={{color:"green"}}>{name} : True </li>
    }
    else{
        return <li style={{color:"red"}}>{name} : False</li>
    }
}

function ConditonalRender() {
    return (
        <div>
            <h1>Condtional Rendering</h1>
            <ul>
                <Item isPacked={true} name="1.show conditional rendering"/>
                <Item isPacked={true} name="2.show conditional rendering"/>
                <Item isPacked={false} name="3.show conditional rendering"/>
            </ul>
        </div>
    )
}

export default ConditonalRender