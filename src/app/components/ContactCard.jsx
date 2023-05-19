import Link from 'next/link'
import React from 'react'
import { MdEmail, MdVoiceChat, MdForum} from "react-icons/md"

const ContactCard = () => {
  return (
    <div className=' sm:w-[70vw] w-screen m-auto'>
        <div className="grid sm:grid-cols-3 place-items-center p-8 gap-2 ">
            <div className="card cardstyle ">
                <i className='text-4xl text-red-500 pb-4'><MdEmail/></i>
                <h2 className='font-bold pb-2'>Email</h2>
                <p>Monday to Friday Expected</p>
                <p>Response time: 72hours</p>
                <Link href='/' className='pt-8'>Send Email <span>-&gt;</span></Link>
            </div>
            
            <div className="card cardstyle ">
                <i className='text-4xl text-red-500 pb-4'><MdVoiceChat/></i>
                <h2 className='font-bold pb-2'>Live Chat</h2>
                <p>Monday to Friday Expected</p>
                <p>Response time: 72hours</p>
                <Link href='/' className='pt-8'>Send Email <span>-&gt;</span></Link> 
            </div>
            <div className="card cardstyle ">
                <i className='text-4xl text-red-500 pb-4'><MdForum/></i>
                <h2 className='font-bold pb-2'>Community Forum</h2>
                <p>Monday to Friday Expected</p>
                <p>Response time: 72hours</p>
                <Link href='/' className='pt-8'>Send Email <span>-&gt;</span></Link>
            </div>
        </div>
    </div>
  )
}

export default ContactCard