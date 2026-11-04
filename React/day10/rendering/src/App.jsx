import React, { useState } from 'react'
import Student from './components/Student';

const App = () => {
  const [value,setValue]=useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayName(value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <h3>student name:{displayName}</h3>
      <Student/>
      <StudentData/>
    </div>
  )
}

export default App
