import React from 'react'
import {useState} from "react";

const Tasktwo = () => {
    const[count,setcount]=useState(0);
  return (
    <>
    <div>
      <h1>Number is:{count}</h1>
      <button onClick={()=>setcount(count+1)}>increment</button>
      <button onClick={()=>setcount(count-1)}>decrement</button>
       <button onClick={()=>setcount(0)}>reset</button>
    </div>
    </>
  )
}

export default Tasktwo;


