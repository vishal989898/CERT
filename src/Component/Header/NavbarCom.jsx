import React, { useState } from 'react'
import Logo from '../../Assets/certLogo.png'
import { Link } from 'react-router-dom'

import NavLinks from './NavLinks'
const NavbarCom = () => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  return (
    <nav className='bg-[#114272]'>
      <div className='h-25  flex items-center font-medium justify-around cursor-pointer text-white'>
      <div className=' z-50 p-5 md:w-auto w-full justify-between flex'>
        <img className='' src={Logo} alt="" />
      <div className='text-3xl md:hidden' onClick={()=>setOpen(!open)}>
        <ion-icon name={`${open ? 'close':'menu'}`}></ion-icon>
      </div> </div>
      <ul className='md:flex hidden uppercase items-center gap-3 font-[Poppins]'>
        <li><Link to="/" className="inline-block py-7 px-3">
          home
        </Link></li>
        <NavLinks onClick={()=>setClick(!click)} />
      </ul>
      {/* for mobile menu */}
      <ul className={`md:hidden absolute w-full h-full bg-[#114272] bottom-0 py-24 pl-4 duration-500 ${open ? 'left-0':"left-[-100%]" }`}>
         <li><Link to="/" className="inline-block py-7 px-3">
          home
        </Link></li>
        <NavLinks/>
      </ul>
    </div>
    </nav>
  )
}

export default NavbarCom
