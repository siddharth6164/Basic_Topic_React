import React, { createContext } from 'react'
import Contexthookuse from './Contexthookuse';
const Mycontext=createContext();
function Usecontexthook() {
  return (
    <Mycontext.Provider value={"siddharth singh"}>
        <Contexthookuse/>
    </Mycontext.Provider>
  )
}

export {Mycontext}
export default Usecontexthook