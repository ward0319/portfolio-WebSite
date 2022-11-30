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
        <h1 className='bigTitle'>Hi, I'am Hyunwung</h1>
        <h2 className='smallTitle'>FrontEnd Developer</h2>
        <h3 className='description'>I'm building Interactive Web and development producing quality work</h3>
      </div>
      <a href='#about' className='bottom-btn'>
        <img src={exapndLogo} alt="logo stuff"></img>
      </a>
    </div>
  )
}
