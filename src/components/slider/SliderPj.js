import React,{useState}from 'react'
import withTopia from "../../assets/withtopia.jpg"
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import {SliderData} from "./SliderData";
import "./Slider.scss"

const SliderPj = ({slides}) => {
  const [current,setCurrent] = useState(0)
  const lengths = slides.length

  const nextButton = () => {
      setCurrent(current === lengths - 1 ? 0 : current + 1);
  }
  const prevButton = () => {
      setCurrent(current === 0 ? lengths -1 : current - 1);
  }
  const clickLink = (index) => {
    if(index === 1){
      alert("ㅇㅇ")
      return
    }
  }
  return (
    <section className="gallery">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevButton}></FaArrowAltCircleLeft>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextButton}></FaArrowAltCircleRight>
      {SliderData.map((slide,index)=>{
        return(
          <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && (
                <img src={process.env.PUBLIC_URL+slide.image} alt = 'image' className="images2" onClick={()=>clickLink(index)}></img>
              )}
          </div>
          )
      })}
    </section>
  )
}

export default SliderPj