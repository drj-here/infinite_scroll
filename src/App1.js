import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [count,setCount]=useState(0)
  const cnt=useRef(0)
  let a=0;
  const ref=useRef()
  // a is a normal variable whose value reinitializes after every re-render

  // while the value of cnt which is initialized using useRef persists
  useEffect(()=>{
    cnt.current=cnt.current+1;
    a=a+1;
    console.log(`a is ${a}`)
    console.log(`${cnt.current}`)
    // another use case of useRef is for reference for dom elements to avoid traditional dom manipulation
    ref.current.style.background="red"
  },[])

  return (
    <div className="App">
      <button ref={ref} onClick={()=>setCount(count+1)}>{count}</button>
      <button onClick={()=>ref.current.style.display="none"}>Hide the Count button</button>
    </div>
  );
}

export default App;
