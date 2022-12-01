import './intro.scss';
import icon from "../../assets/icon.jpg";
import exapndLogo from "../../assets/down.png";

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <img src={icon} alt="my"></img>
      </div>
      <div className='right'>
        <h1 className='bigTitle'><span>Hi, I'am Hyunwung</span></h1>
        <h2 className='smallTitle'><span>FrontEnd Developer</span></h2>
        <h3 className='description'><span>I'm building Interactive Web and development producing quality work</span></h3>
      </div>
      <a href='#about' className='bottom-btn'>
        <img src={exapndLogo} alt="logo stuff"></img>
      </a>
    </div>
  )
}
