import "./portfolio.scss"
import SliderPj from "../slider/SliderPj";
import { AiOutlinePaperClip } from "react-icons/ai";
import { SliderData } from "../slider/SliderData";
import { ImFilePicture } from "react-icons/im";

export default function Portfolio() {
  return (
    <div className='portfolio' id="portfolio">
      <div className="portfolio-title">
        <ImFilePicture style={{fontSize:"42px"}}></ImFilePicture><span> Portfolio</span>
      </div>
      <div className="portfolio-container">
        <SliderPj slides={SliderData}></SliderPj>
      </div>
    </div>
  )
}
