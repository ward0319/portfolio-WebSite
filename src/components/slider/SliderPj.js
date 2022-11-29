import React,{useState}from 'react'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import {SliderData} from "./SliderData";
import "./Slider.scss"

const SliderPj = ({slides}) => {  
  const [current,setCurrent] = useState(0)
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
      console.log(id)
      window.location.href="https://github.com/"
    }
    if(id === 1){
      console.log(id)
      window.location.href="https://github.com/"
    }
    if(id === 2){
      console.log(id)
      window.location.href="https://github.com/"
    }
  }
  const descAdd = (id) => {
    
  }
  const removeMouse = () => {
    setContent("")
  }
  return (
    <section className="gallery">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevButton}></FaArrowAltCircleLeft>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextButton}></FaArrowAltCircleRight>
      {SliderData.map((slide,index)=>{
        return(
          <div className={index === current ? "slide active" : "slide"} key={index} onMouseEnter={()=>descAdd(index)} onMouseLeave={()=>removeMouse()}>
            {index === current && (
              <img src={process.env.PUBLIC_URL+slide.image} alt = 'image' className="images" onClick={()=>clickLink(index)}></img>
            )}
          </div>
        )}
      )}
    </section>
  )
}

export default SliderPj