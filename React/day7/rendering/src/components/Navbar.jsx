import React from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-gray-400  font-bold p-2 flex justify-start gap-10 items-center'>
      <div className='mx-15'>logo</div>
      <div>
      <Link to={"/"}>Home</Link>
      </div>
    </div>
  )
}

export default Navbar

