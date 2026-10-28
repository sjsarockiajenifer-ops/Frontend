import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-amber-100 font-bold p-3 flex justify-between items-center'>
    <div className='mx-15 bg-green-300 p-1 rounded-2xl w-50 text-center'>logo</div>
    <div className='mx-15 flex gap-10'>
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/Help"}>Help</Link>
    </div>
    </div>
    </>
  )
}

export default Navbar
