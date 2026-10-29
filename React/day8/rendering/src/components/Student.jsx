import React from 'react'

const Student = () => {
    const stu = {
  name: "Arun",
  age: 21,
  department: "Computer Science",
  city: "Chennai"
};
  return (
    <div>
      <h1>name:{stu.name}</h1>
      <h1>age:{stu.age}</h1>
      <h1>department:{stu.department}</h1>
      <h1>city:{stu.city}</h1>
    </div>
  )
}


export default Student;



