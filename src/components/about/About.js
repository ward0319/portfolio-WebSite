import React, {useEffect, useState} from 'react'
import "./About.scss"
import { FaCheck } from "react-icons/fa";
import { BiMagnet } from "react-icons/bi";
import exapndLogo from "../../assets/down.png";

import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import {sliderMyImg} from "../slider/SliderMyImg";

export default function About() {
  const [current,setCurrent] = useState(0)
  const nextButton = () => {
    if(current === 7) return setCurrent(0);
    else setCurrent(current + 1);
  }
  const prevButton = () => {
    if(current === 0) return setCurrent(7);
    else return setCurrent(current - 1);
  }

  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <BiMagnet ></BiMagnet><span className='about-title-text'> About</span>
      </div>
      
      <div className='about_slider'>
        <div className='about_button_wrap'>
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevButton}></FaArrowAltCircleLeft>
          <FaArrowAltCircleRight className="right-arrow" onClick={nextButton}></FaArrowAltCircleRight>
        </div>
        {sliderMyImg.map((slide,index)=>{
          console.log(process.env.PUBLIC_URL+slide.image)
          return(
            <div className='about_slider_container' key={index}>
              {index === current && (
                <img src={process.env.PUBLIC_URL+slide.image} alt = "image" className="images"></img>
              )}
            </div>
          )}
        )}
      </div>
      <div className='about-container'>
        <div className='right-about'>
        <p className='right-mg'><FaCheck></FaCheck> 제가 모르는 분야, 지식에 대해 항상 배우고자 합니다 !</p>
          <p className='right-mg'><FaCheck></FaCheck> "만족" 하지 않고 계속 발전을 추구합니다 !</p>
          <p className='right-mg'><FaCheck></FaCheck> 활발한 호전적인 성격의 소유자 입니다 !</p>
        </div>
      </div>
      <a href='#skills' className='bottom-btn2'>
        <img src={exapndLogo} alt="logo stuff"></img>
      </a>
    </div>
  )
}