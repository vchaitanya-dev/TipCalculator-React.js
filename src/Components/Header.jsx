import React from 'react'
import { Link } from 'react-router-dom'
import  {AiFillInstagram} from 'react-icons/ai'
import {FaPinterestP,} from 'react-icons/fa'
function Header() {
  return (
<>
<div className="bg-third h-30 p-8">
<h1 className="text-4xl text-second text-center">Kushal Mehra </h1>
 <div className='flex flex-row justify-around'>
 <div className='flex mt-3 flex-row flex-wrap'>
    <Link className="text-2xl text-first m-1 p-2" to='/' >Home</Link>
    <Link className="text-2xl text-first m-1 p-2" to='/about' >About</Link>
    <Link className="text-2xl text-first m-1 p-2" to='/contact' >Contact</Link>
  </div>
  <div className='flex flex-row '>
<AiFillInstagram  className="text-second m-1 p-2" size={60} />
    <FaPinterestP className='text-second m-1 p-2' size={60} />
</div>
 </div>
</div>
</>

  )
}

export default Header