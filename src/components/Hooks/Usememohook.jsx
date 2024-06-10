import React, { useMemo, useState } from "react";

function Usememohook() {

  const [number, setNumber] = useState(0);
  const [show,setShow] = useState(false);

  const getValue=()=>{
    return setNumber(number+1);
  }

  const expensivefunction = (num) => {
    let sum=0;
    for (let i = 0; i <= num; i++) {
      console.log ("sidd");
      sum += i;
    }
    return sum;
  };

  const calculation = useMemo(() => {return expensivefunction(number)}, [number]);
  
  return(
    <div>
        <button onClick={getValue}>Counter</button>
        my new numbwe : {calculation}
        <button onClick={()=>setShow(!show)}>
          {show ? "you Clicked me" : "click me plz"}
        </button>
    </div>);
}

export default Usememohook;