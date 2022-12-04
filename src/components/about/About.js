import React from 'react'
import "./About.scss"
import { BsDownload } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { BiMagnet } from "react-icons/bi";
import { FaBirthdayCake ,FaPhoneAlt} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import exapndLogo from "../../assets/down.png";

export default function About() {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <BiMagnet style={{fontSize:"42px"}}></BiMagnet><span className='about-title'> About</span>
      </div>
      <div className='about-container'>
        <div className='about-center'>
          <div className='center-container'>
            <div className='center-container-items'>
              <div className='items-content'>
                <IoPersonSharp style={{fontSize:"26px"}}></IoPersonSharp>
                <div className='direction'>
                  <p>이름</p>
                  <p>서현웅</p>
                </div>
              </div>
            </div>
            <div className='center-container-items'>
              <div className='items-content'>
                <FaBirthdayCake style={{fontSize:"26px"}}></FaBirthdayCake>
                <div className='direction'>
                  <p>생년월일</p>
                  <p>98.03.19</p>
                </div>
              </div>
            </div>
            <div className='center-container-items'>
              <div className='items-content'>
                <FiMapPin style={{fontSize:"26px"}}></FiMapPin>
                <div className='direction'>
                  <p>주소지</p>
                  <p>경기도 하남시</p>
                </div>
              </div>
            </div>
            <div className='center-container-items'>
              <div className='items-content'>
                <FaPhoneAlt style={{fontSize:"26px"}}></FaPhoneAlt>
                <div className='direction'>
                  <p>전화번호</p>
                  <p>010-4913-3152</p>
                </div>
              </div>
            </div>
          </div>
          <a className='download-link' href='서현웅-이력서 - Google Docs.pdf' download="서현웅-이력서 - Google Docs.pdf">
            <button className='download-btn'>Resume <BsDownload></BsDownload></button>
          </a>
        </div>
        <div className='right-about'>
          <p className='right-mg'><FaCheck></FaCheck> 모르는 것이 있으면 알때까지 항상 노력하는 합니다 !</p>
          <p className='right-mg'><FaCheck></FaCheck> 만족하지 않고 계속 발전하고자 합니다 !</p>
          <p className='right-mg'><FaCheck></FaCheck> 협업하기 좋은 소통능력을 갖고 있습니다 !</p>
        </div>
      </div>
      <a href='#skills' className='bottom-btn2'>
        <img src={exapndLogo} alt="logo stuff"></img>
      </a>
    </div>
  )
}
