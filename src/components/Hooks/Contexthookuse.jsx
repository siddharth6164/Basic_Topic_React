import React, { useContext } from 'react'
import {Mycontext} from "./Usecontexthook"
function Contexthookuse() {
    const name = useContext(Mycontext);

    return (
        <div>
            {name}
        </div>
    )
}

export default Contexthookuse