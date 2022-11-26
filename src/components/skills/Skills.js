import "./Skills.scss";
import { AiOutlinePaperClip } from "react-icons/ai";
import reactIcon from "../../assets/react.png"
import htmlIcon from "../../assets/html.png"
import cssIcon from "../../assets/css.png"
import jsIcon from "../../assets/javascript.png"
import pythonIcon from "../../assets/python.png"
import awsIcon from  "../../assets/aws.png"
import sassIcon from  "../../assets/sass.png"

export default function Skills() {
  const clickEvent = () => {

  }
  return (
    <div className='skills' id="skills">
      <div className="skills-title">
        <AiOutlinePaperClip style={{fontSize:"42px"}}></AiOutlinePaperClip><span>Skills</span>
      </div>
      <div className="skills-container">
        <div className="skills-back">
          <img src={htmlIcon} className="skills-icons" onClick={clickEvent}></img>
        </div>
        <div className="skills-back">
          <img src={cssIcon} className="skills-icons"></img>
        </div>
        <div className="skills-back">
          <img src={jsIcon} className="skills-icons"></img>
        </div>
        <div className="skills-back">
          <img src={reactIcon} className="skills-icons"></img>
        </div>
        <div className="skills-back">
          <img src={pythonIcon} className="skills-icons"></img>
        </div>
      </div>
      <div className="skills-container2">
        <div className="skills-back">
          <img src={awsIcon} className="skills-icons" onClick={clickEvent}></img>
        </div>
        <div className="skills-back">
          <img src={sassIcon} className="skills-icons"></img>
        </div>
      </div>
    </div>
  )
}
