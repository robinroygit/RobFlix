"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
const [status,setStatus] = useState(null)
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        if (response.status === 200) {
            setUser({
                username: "",
                email: "",
                phone: "",
                message: ""
            })
            setStatus('success');
        } else {
            setStatus('error');
        }

    }catch (e) {
        console.log(e)
    }

}


  return (
    <form className="border text-white border-white w-80 flex flex-col justify-center items-center p-8 bg-gray-400/50 "
    onSubmit={handleSubmit}
    >
      <div className=" py-4">
        <label htmlFor="username">
          Enter your name:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => handleChange(e)}
            id="username"
            placeholder="Enter your name"
            className=" w-full p-1 font-thin text-black"
            autoComplete="off"
            required
          />
        </label>
      </div>
      <div className=" py-4">
        <label htmlFor="email">
          Enter your Email:
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your Email"
            className=" w-full p-1 font-thin text-black "
            autoComplete="off"
            required

          />
        </label>
      </div>
      <div className=" py-4">
        <label htmlFor="phone">
          Phone number:
          <input
            type="number"
            name="phone"
            id="phone"
            value={user.phone}
            onChange={(e) => handleChange(e)}
            placeholder="Enter phone number"
            className=" w-full p1 font-thin text-black "
            autoComplete="off"
            required

          />
        </label>
      </div>
      <div className=" py-4">
        <label htmlFor="message">
          Enter your :
          <textarea
            type="text"
            name="message"
            id="message"
            value={user.message}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your message"
            rows={5}
            className=" w-full p1 font-thin text-black"
            autoComplete="off"
            required
          />
        </label>
      </div>
      <div>
            {status ==="success"&& <p>Thank you for your message</p>}
            {status ==="error"&& <p>there was an error submiting your message</p>}
        <button type="submit" className="btn ring-2 ring-white rounded-md px-2 mt-4">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
