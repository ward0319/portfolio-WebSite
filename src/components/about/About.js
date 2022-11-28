import React from 'react'
import "./About.scss"
import { AiOutlinePaperClip , AiOutlineCheck } from "react-icons/ai";
import profile from "../../assets/profile.jpg"
import { BsDownload } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";


export default function About() {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <AiOutlinePaperClip style={{fontSize:"42px"}}></AiOutlinePaperClip><span className='about-title'>About</span>
      </div>
      <div className='about-container'>
        <img src={profile} className="about-profile"></img>
          <div className='about-center'>
            <div className='center-container'>
              <div className='center-container-items'>
                <div className='items-content'>
                  <p>이름</p>
                  <p>서현웅</p>
                </div>
              </div>
              <div className='center-container-items'>
                <div className='items-content'>
                  <p>생년월일</p>
                  <p>98.03.19</p>
                </div>
              </div>
              <div className='center-container-items'>
                <div className='items-content'>
                  <p>주소지</p>
                  <p>경기도 하남시</p>
                </div>
              </div>
              <div className='center-container-items'>
                <div className='items-content'>
                  <p>전화번호</p>
                  <p>010-4913-3152</p>
                </div>
              </div>
            </div>
            <a className='download-link' href='aws.png' download="aws.png">
              <button className='download-btn'>Resume <BsDownload></BsDownload></button>
            </a>
          </div>
          <div className='right-about'>
            <p className='right-mg'><FaCheck></FaCheck> 모르는 것이 있으면 알때까지 항상 노력하는 합니다 !</p>
            <p className='right-mg'><FaCheck></FaCheck> 만족하지 않고 계속 발전하고자 합니다 !</p>
            <p className='right-mg'><FaCheck></FaCheck> 협업하기 좋은 소통능력을 갖고 있습니다 !</p>
          </div>
      </div>
    </div>
  )
}
