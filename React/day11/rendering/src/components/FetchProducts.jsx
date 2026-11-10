import { useEffect, useState } from "react"


const FetchProducts = () => {

    const [userDatas,setUserDatas] = useState([])

  const fetchGet = async()=>{

    const res = await fetch("https://dummyjson.com/products?limit=4")

    const change = await res.json()

    setUserDatas(change.products)
    
    

  }

  useEffect(()=>{
    fetchGet()
  },[])

  return (
    <>
    <div>
        {userDatas.map((e,i)=>(
            <div key={i}>
                <img src={e.images} style={{width:"200px"}} alt="" />
                <h1>{e.title}</h1>
                <p>{e.price}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default FetchProducts