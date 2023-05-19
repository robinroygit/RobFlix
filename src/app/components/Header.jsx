import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';

const Header = () => {
  return (
    <header className=' border-b-2 h-20 px-24 flex justify-between items-center border-none outline-none '>
        <div className=' text-left' >
            <Link href="/">
            <Image 
            className='p-4'
            src='/assets/ROBFLIX.png'
            alt='my logo'
            width={200}
            height={200}
            />
            </Link>
        </div>
        <Nav/>
    </header>
  )
}

export default Header