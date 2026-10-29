import React from 'react'

const Employee = () => {
    const employees = [
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Priya", salary: 30000 },
  { id: 3, name: "Rahul", salary: 35000 },
  { id: 4, name: "Divya", salary: 40000 }
];
  return (
    <div>
      <h1>employee details</h1>
      <table border="1">
       <thead>
        <tr>
            <th>ID</th>
            <th>name</th>
            <th>salary</th>
        </tr>
       </thead>
       <tbody>
        {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Employee

