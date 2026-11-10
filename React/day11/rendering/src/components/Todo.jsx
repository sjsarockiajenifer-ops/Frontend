import { useEffect, useState } from "react"


const Todo = () => {
    
  const [usertask,setUserTask] = useState("")
  const [usercontact,setUserContact] = useState("")
  const [userDate,setUserDate] = useState("")

  const [datasshow,setDatasShow] = useState([])

  const handleTask = (e)=>{

    setUserTask(e.target.value)

  }
  const handleContact = (e)=>{

    setUserContact(e.target.value)
    
  }
  const handleDate = (e)=>{

    setUserDate(e.target.value)
    
  }

  const handleClcik = (e)=>{

    e.preventDefault()


    const obj = {id:Date.now(),usertask,usercontact,userDate}

    const copy = JSON.parse(localStorage.getItem("taskdatas")) || []

    copy.push(obj)

    localStorage.setItem("taskdatas",JSON.stringify(copy))


    alert('Successfully Task Added')

    setUserTask("")
    setUserDate("")
    setUserContact("")

  }


  useEffect(()=>{
    
    const show = localStorage.getItem("taskdatas")

    const change = JSON.parse(show)

    setDatasShow(change)

  },[handleClcik])
     

  return (
    <>
   
   <form>
     <input type="text" value={usertask} placeholder="Enter the Task" onChange={handleTask} />
     <input type="text" value={usercontact} placeholder="Enter the contact" onChange={handleContact}  />
     <input type="date" value={userDate} placeholder="Enter the end date" onChange={handleDate}  />
     <button onClick={handleClcik}>Add Task</button>
   </form>


   <div>
    {datasshow.map((e)=>(
        <div key={e.id}>
            <h1>{e.usertask}</h1>
            <p>{e.usercontact}</p>
            <p>{e.userDate}</p>
        </div>
    ))}
   </div>
   
    </>
  )
}

export default Todo