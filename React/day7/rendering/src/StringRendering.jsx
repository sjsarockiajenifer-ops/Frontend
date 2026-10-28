import React from 'react'
import { Link } from 'react-router-dom'

const StringRendering = () => {
    let title_datas="joseph vijay"
    let number_datas=2026
  return (
    <div className='bg-blue-300 font-bold p-2 '>
      <div className='flex gap-15 items-center mx-15 h-100'>
        <h1 className='mt-3 bg-white text-center w-40 h-20 p-4'>string rendering<Link to=
       {"/"} className='mx-1 bg-amber-400 rounded-2xl w-30 p-2'>Back</Link></h1>
      <div>
        <h2>this is TN goverment</h2>
        <p>The official contact details {title_datas} for the Chief Minister of Tamil Nadu{title_datas}, Thiru. C. Joseph Vijay, his office (CMO), and his political party (TVK) are organized below by purpose</p>
      <p>{title_datas}hief Minister's Office & Government Helplines{title_datas}</p>
      </div>
      </div>
    </div>
  )
}

export default StringRendering
