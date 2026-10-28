import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='bg-amber-300 font-bold p-2 '>
      <div className='flex gap-15 mx-15'>
        <Link to="/string" className='bg-amber-700 p-2 font-thin rounded-2xl w-50 text-center'>String Rendering</Link>
        <Link to="/number" className='bg-amber-700 p-2 font-thin rounded-2xl w-50 text-center'>Number Rendering</Link>
        <Link to="/boolean" className='bg-amber-700 p-2 font-thin rounded-2xl w-50 text-center'>Boolean Rendering</Link>
        <Link to="/falsey" className='bg-amber-700 p-2 font-thin rounded-2xl w-50 text-center'>falsey Rendering</Link>
      </div>
    </div>
  )
}

export default Banner
