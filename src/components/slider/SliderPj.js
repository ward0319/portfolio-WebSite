import React,{useState}from 'react'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import {SliderData} from "./SliderData";
import "./Slider.scss"
import { useEffect } from 'react';

const SliderPj = ({slides}) => {  
  const [current,setCurrent] = useState(0)
  const [id, setId] = useState(null)
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
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
      window.location.href="https://github.com/"
    }
    if(id === 2){
      console.log(id)
      window.location.href="https://github.com/"
    }
  }
  const descAdd = (id) => {
    setId(id)
  }
  const removeMouse = () => {
    setId(null)
  }
  useEffect(()=>{
    if(id === 0){
      setTitle("WithTopia")
      setContent("ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ")
    }
    if(id === 1){
      setTitle("")
      setContent("")
    }
    if(id === 2){
      setTitle("")
      setContent("")
    }
  },[id])
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
                      <p>{content}</p>
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