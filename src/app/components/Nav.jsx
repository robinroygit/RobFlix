
"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { MdMenu } from 'react-icons/md';

const Nav = () => {

    const [menu,setMenu] = useState(false);
    console.log(menu)
  return (
    <nav className='flex '>
        <div>
            <ul className='lg:flex font-thin gap-4 hidden  text-xl text-[#161617]'>
                <li className='hover:text-red-600' >
                    <Link href="/" >
                        Home
                    </Link>
                </li >
                <li className='hover:text-red-600' >
                    <Link href="/movie" >
                        Movie
                    </Link>
                </li >
                <li className='hover:text-red-600' >
                    <Link href="/about">
                        about
                    </Link>
                </li >
                <li className='hover:text-red-600' >
                    <Link href="/contact">
                        contact
                    </Link>
                </li >
            </ul>

          <div className='lg:hidden '>
            <button className="menu-btn absolute right-4 text-2xl text-white" onClick={()=>setMenu((prev)=>!prev)}><MdMenu/></button>

         {menu? <ul className='absolute flex flex-col gap-4 justify-evenly font-thin text-2xl items-center bg-black/80 text-white right-10 w-3/4 h-3/4 border border-black z-50 backdrop-blur-md'>
            <li className='hover:text-red-600 ' >
                    <Link href="/" onClick={()=>setMenu((prev)=>!prev)} >
                        Home
                    </Link>
                </li >
            <li className='hover:text-red-600' >
                    <Link href="/about" onClick={()=>setMenu((prev)=>!prev)} >
                        About
                    </Link>
                </li >
            <li className='hover:text-red-600' >
                    <Link href="/movie" onClick={()=>setMenu((prev)=>!prev)} >
                        Movies
                    </Link>
                </li >
            <li className='hover:text-red-600' >
                    <Link href="/contact" onClick={()=>setMenu((prev)=>!prev)} >
                        Contact
                    </Link>
                </li >
            </ul>:""

         }
          </div>

        </div>
         
    </nav>
  )
}

export default Nav