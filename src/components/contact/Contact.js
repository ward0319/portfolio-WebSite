import React from 'react'
import "./contact.scss"
import shake from "../../assets/shake.svg"
import { useState } from 'react';

export default function Contact() {
  const [message,setMessage] = useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        
      </div>
      <div className='right'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks !</span>}
        </form>
      </div>
    </div>
  )
}
