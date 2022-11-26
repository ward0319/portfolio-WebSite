import "./portfolio.scss"
import SliderPj from "../slider/SliderPj";
import { AiOutlinePaperClip } from "react-icons/ai";
import { SliderData } from "../slider/SliderData";

export default function Portfolio() {
  return (
    <div className='portfolio' id="portfolio">
      <div className="portfolio-title">
        <AiOutlinePaperClip style={{fontSize:"42px"}}></AiOutlinePaperClip><span>Portfolio</span>
      </div>
      <div className="portfolio-container">
        <SliderPj slides={SliderData}></SliderPj>
        {/* <div className="portfolio-cards">
          <img src={withTopia} className="cards-items"></img>
          <img src={withTopia} className="cards-items"></img>
          <img src={withTopia} className="cards-items"></img>
        </div>   */}
      </div>
    </div>
  )
}
