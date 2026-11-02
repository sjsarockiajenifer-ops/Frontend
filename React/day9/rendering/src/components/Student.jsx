import React from 'react'

const Student = (props) => {
  return (
    <div>
      <p>name={props.name}</p>
      <p>age={props.age}</p>
      <p>course={props.course}</p>
    </div>
  )
}

export default Student
