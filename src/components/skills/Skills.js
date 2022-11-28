import "./Skills.scss";
import { AiOutlinePaperClip } from "react-icons/ai";
import awsIcon from  "../../assets/aws.png"
import sassIcon from  "../../assets/sass.png"
import { useState } from "react";

export default function Skills() {
  const [hover,setHover] = useState()
  const hoverEvent = (id) => {
    setHover(id)
  }
  const unHoverEvent = () => {
    setHover()
  }
  const iconData = [{
    icons:"/icons/html.png"
  },
  {
    icons:"/icons/css.png"
  },
  {
    icons:"/icons/javascript.png"
  },
  {
    icons:"/icons/react.png"
  },
  {
    icons:"/icons/python.png"
  }]
  return (
    <div className='skills' id="skills">
      <div className="skills-title">
        <AiOutlinePaperClip style={{fontSize:"42px"}}></AiOutlinePaperClip><span>Skills</span>
      </div>
      <div className="skills-container">
      {iconData.map((data,index)=>{
        return(
          <div key={index} className={"skills-back" + (hover === index ? " hover" : "")} onMouseEnter={()=>hoverEvent(index)} onMouseLeave={()=>unHoverEvent()}>
            <img src={process.env.PUBLIC_URL+data.icons} className="skills-icons"></img>
          </div>
        )
      })}
      </div>
      <div className="skills-container2">
        <div className={"skills-back" + (hover === 6 ? " hover" : "")} onMouseEnter={()=>hoverEvent(6)} onMouseLeave={()=>unHoverEvent()}>
          <img src={awsIcon} className="skills-icons"></img>
        </div>
        <div className={"skills-back" + (hover === 7 ? " hover" : "")} onMouseEnter={()=>hoverEvent(7)} onMouseLeave={()=>unHoverEvent()}>
          <img src={sassIcon} className="skills-icons"></img>
        </div>
      </div>
    </div>
  )
}
