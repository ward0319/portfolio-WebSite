import React from 'react'
import "./About.scss"
import { AiOutlinePaperClip } from "react-icons/ai";
import profile from "../../assets/profile.jpg"

export default function About() {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <AiOutlinePaperClip style={{fontSize:"42px"}}></AiOutlinePaperClip><span className='about-title'>About</span>
      </div>
      <div className='about-container'>
        <img src={profile} className="about-profile"></img>
        <div>
          <div className='about-right'>알빠노 ?</div>
        </div>
      </div>
    </div>
  )
}
