import React from 'react'

const BooleanRendering = () => {
    let isActive={}
    let values=true
  return (
    <div className='bg-pink-300 p-10'>
        <div>{isActive?"this is react":"this is not react"}</div>
    <div>
        {values&&"react"}
    </div>
    </div>
  )
}

export default BooleanRendering
