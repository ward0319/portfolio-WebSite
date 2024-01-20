import "./Skills.scss";
import jquery from  "../../assets/jquery.png"
import sassIcon from  "../../assets/sass.png"
import { useState } from "react";
import Modal from "../modal/Modal";
import { TbSword } from "react-icons/tb";
import exapndLogo from "../../assets/down.png";

export default function Skills() {
  const [id,setId] = useState()
  const [hover,setHover] = useState()
  const [check,setCheck] = useState(false)
  const hoverEvent = (id) => {
    setHover(id)
  }
  const unHoverEvent = () => {
    setHover()
    setId()
  }
  const openModal = (id) => {
    setCheck(true)
    setId(id)
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
  },
  {
    icons:"/icons/sass.png"
  },
  {
    icons:"/icons/jquery.png"
  }]
  return (
    <div className='skills' id="skills">
      <div className="skills-title">
        <TbSword style={{fontSize:"42px"}}></TbSword><span> Skills</span>
      </div>
      <div className="skills-wrap">
        <div className="skills-container">
          {iconData.map((data,index)=>{
            return(
              <div key={index} className={"skills-back" + (hover === index ? " hover" : "")} onMouseEnter={()=>hoverEvent(index)} onMouseLeave={()=>unHoverEvent()}>
                <img src={process.env.PUBLIC_URL+data.icons} className="skills-icons" onClick={()=>openModal(index)}></img>
              </div>
            )
          })}
        </div>
      </div>
      
      <Modal id={id} check={check} setCheck={setCheck} iconData={iconData}></Modal>
      <a href='#portfolio' className='bottom-btn3'>
        <img src={exapndLogo} alt="logo stuff"></img>
      </a>
    </div>
  )
}
