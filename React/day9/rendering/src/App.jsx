import React from 'react'
import {useState} from "react";
import Tasktwo from './components/Tasktwo';
import Apptwo from './components/Apptwo';

const App = () => {
  const[name, setName] = useState("Arun");

  const changeName=()=>{
    setName(name==="Arun"?"Kumar":"Arun");
  };
  return (
      <>
    <div>
      <h1>enter your name:{name}</h1>
      <button onClick={changeName}>change name</button>
    </div>
    <Tasktwo/>
    <Apptwo/>
</>
  )
}

export default App

