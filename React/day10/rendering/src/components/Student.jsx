
import React, { useState } from 'react';

const Student = () => {
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[email, setEmail]=useState("");
    const[submitted,setSubmitted]=useState(false);
    const handlechange=(e)=>{
        setName(e.target.value);
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      setSubmitted(true);
    }
  return (
    <div>
      <h3>student name</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter student name" value={name} onChange={handlechange} />
        <input type="number" placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.value)} />
        <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h3>Student Details</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
        </div>
      )}
    </div>
  )
}

export default Student



