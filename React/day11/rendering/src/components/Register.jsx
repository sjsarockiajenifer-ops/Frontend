import { useState } from "react"


const Register = () => {

  const [username,setUserName] = useState("")
  const [useremail,setUserEMail] = useState("")
  const [usermobile,setUserMobile] = useState("")

  const [userDatas,setUserDatas] = useState([])


  const [editId,setEditId] = useState(null)


 const handleName = (e)=>{

    setUserName(e.target.value)

 }

 const handleEmail = (e)=>{

    setUserEMail(e.target.value)
    
 }

 const handleMobile = (e)=>{

    setUserMobile(e.target.value)
    
 }

 const handleClick = (e)=>{
   
    e.preventDefault()

    const obj = {id:Date.now(),username,useremail,usermobile}

    const copy = [...userDatas]

    copy.push(obj)

    setUserDatas(copy)
    
    alert("Successfully Added")
    setUserName("")
    setUserEMail("")
    setUserMobile("")

    
 }


 const handleEdit= (users)=>{
    
    setUserName(users.username)
    setUserEMail(users.useremail)
    setUserMobile(users.usermobile)
    setEditId(users.id)

 }

//  const handleUpdate = (e)=>{

//     e.preventDefault()

//     const updateDatas = userDatas.map((e,i)=>e.id==editId?{})

//  }

 const handleDelete = (userid)=>{

    const deleteData = userDatas.filter((e)=>e.id!==userid)

    console.log(deleteData);
    

    setUserDatas(deleteData)

 }

  return (
    <>
    <form>
        <input type="text" value={username} onChange={handleName} placeholder="Enter the Name" />
        <input type="text" value={useremail} onChange={handleEmail} placeholder="Enter the Email" />
        <input type="text" value={usermobile} onChange={handleMobile} placeholder="Enter the Mobile" />
        <button onClick={handleClick}>Register</button>
        
    </form>

    <div>
        {userDatas.map((e)=>(
            <div key={e.id}>
                <h1>{e.username}</h1>
                <p>{e.useremail}</p>
                <p>{e.usermobile}</p>

                <button onClick={()=>handleEdit(e)}>Edit</button>
                <button onClick={()=>handleDelete(e.id)}>Delete</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default Register