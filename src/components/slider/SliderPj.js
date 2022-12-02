import React,{useState}from 'react'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import {SliderData} from "./SliderData";
import "./Slider.scss"
import { useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const SliderPj = ({slides}) => {  
  const [current,setCurrent] = useState(0)
  const [id, setId] = useState(null)
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const [content2,setContent2] = useState([])
  const lengths = slides.length

  const nextButton = () => {
      setCurrent(current === lengths - 1 ? 0 : current + 1);
  }
  const prevButton = () => {
      setCurrent(current === 0 ? lengths -1 : current - 1);
  }
  const clickLink = (id) => {
    if(id === 0){
      window.location.href="https://github.com/WithTopia/WithTopia-FE"
    }
    if(id === 1){
      window.location.href="https://github.com/plumpsqrl9744/week6_miniproject"
    }
    if(id === 2){
      window.location.href="https://github.com/hyunwung/gamePj"
    }
  }
  const descAdd = (id) => {
    setId(id)
  }
  const removeMouse = () => {
    setContent2([])
    setId(null)
  }
  useEffect(()=>{
    if(id === 0){
      setTitle("WithTopia")
      setContent("비대면 활동이 늘어나는 지금 시대, 간단하게 진행하는 화상채팅 웹앱이 필요하다는 생각이 들어 진행하게 되었습니다. ")
      setContent2([...content2,
        {id:0,name:"방 생성, 방 접속, 방 삭제 기능이 있습니다."},
        {id:1,name:"방에 접속할 시 화상 + 보이스 + 채팅 기능이 가능합니다."},
        {id:2,name:"악성 유저들을 신고할 수 있습니다."},
        {id:3,name:"프로필 / 프로필 관리 기능이 있습니다."},
      ])
    }
    if(id === 1){
      setTitle("Your Pet")
      setContent("사람들이 동물을 기르시고 반려동물을 많이 자랑하십니다. 자랑할 게시판 사이트가 필요하다 생각되어 만들게 되었습니다.")
      setContent2([...content2,
        {id:0,name:"게시글 작성 수정 삭제가 가능합니다."},
        {id:1,name:"댓글과 대댓글 그리고 삭제가 가능합니다."},
        {id:2,name:"좋아요 기능이 있습니다."},
      ])
    }
    if(id === 2){
      setTitle("게임 페이지")
      setContent("게임 페이지가 필요하여 만들게 되었습니다..")
      setContent2([...content2,
        {id:0,name:"방 생성, 방 접속, 방 삭제 기능이 있습니다."},
        {id:1,name:"방에 접속할 시 화상 + 보이스 + 채팅 기능이 가능합니다."},
        {id:2,name:"악성 유저들을 신고할 수 있습니다."},
        {id:3,name:"프로필 / 프로필 관리 기능이 있습니다."},
      ])
    }
  },[id])
  console.log(content2)
  return (
    <section className="gallery">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevButton}></FaArrowAltCircleLeft>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextButton}></FaArrowAltCircleRight>
      {SliderData.map((slide,index)=>{
        return(
          <div className={index === current ? "slide active" : "slide"} key={index} onMouseEnter={()=>descAdd(index)} onMouseLeave={()=>removeMouse()}>
            {index === current && (
              <div>
                <img src={process.env.PUBLIC_URL+slide.image} alt = "image" className="images"></img>
                <div className={id === null ? "none" : "desc"}>
                  {id === null ? null : 
                    <div className="desc-container">
                      <h3>{title}</h3>
                      <p><FaCheck></FaCheck> {content}</p>
                      {content2.map((content,index)=>{
                        return(
                          <p key={index}><BsDot></BsDot> {content.name}</p>
                        )}
                      )}
                      <button onClick={()=>clickLink(index)}>GitHub</button>
                  </div>}
                </div>
              </div>
            )}
          </div>
        )}
      )}
    </section>
  )
}

export default SliderPj