import React from 'react'

const App = () => {
  const languages = ["HTML", "CSS", "JavaScript", "React", "Python"];
  return (
    <div>
      <p>display the programming language</p>
      <ul>
        {languages.map((e,i)=>(
<li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;




