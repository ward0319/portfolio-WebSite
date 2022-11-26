import "./Skills.scss";
import { AiOutlinePaperClip } from "react-icons/ai";
import reactIcon from "../../assets/react.png"
import htmlIcon from "../../assets/html.png"
import cssIcon from "../../assets/css.png"
import jsIcon from "../../assets/javascript.png"
import pythonIcon from "../../assets/python.png"

export default function Skills() {
  return (
    <div className='skills' id="skills">
      <div className="skills-title">
        <AiOutlinePaperClip style={{fontSize:"42px"}}></AiOutlinePaperClip><span>Skills</span>
      </div>
      <div className="skills-container">
        <div className="skills-back">
          <img src={htmlIcon}></img>
          <img src={cssIcon}></img>
          <img src={jsIcon}></img>
          <img src={reactIcon}></img>
          <img src={pythonIcon}></img>
        </div>
      </div>
    </div>
  )
}
