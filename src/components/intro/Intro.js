import './intro.scss';
import icon from "../../assets/icon.jpg";
import exapndLogo from "../../assets/down.png";

export default function Intro() {
  return (
    <div className='intro'>
      <div className='left'>
        <img src={icon} alt="my"></img>
      </div>
      <div className='right'>
        <h1 className='bigTitle'>Hi, I'am Hyun</h1>
        <h2 className='smallTitle'>Frontend developer</h2>
        <h3 className='description'>Interactive Web Design and development knowledge, producing quality work.</h3>
      </div>
      <a href='/portfolio'>
        <img src={exapndLogo} alt="logo stuff"></img>
      </a>
    </div>
  )
}
