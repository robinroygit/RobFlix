import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

const Contact = () => {

  
  return (
    <>
     <div className=' w-full'>
    <h1 className='text-center text-4xl font-bold text-white '>Contact Us</h1>
    <ContactCard/>
      <section className=' w-[80vw] m-auto flex justify-center  items-center flex-col'>
        <h2 className='text-4xl text-white py-4 font-serif'>We Love To Hear <span>From You</span></h2>
        <ContactForm/>
      </section>
     </div>
    </>
  )
}

export default Contact