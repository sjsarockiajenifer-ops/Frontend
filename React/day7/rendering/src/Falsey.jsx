import React from 'react'

const Falsey = () => {
    let falsy=null
  return (
    <div>
      <div>
        <h1>
            {falsy??"react"}
            </h1>
      </div>
    </div>
  )
}

export default Falsey
