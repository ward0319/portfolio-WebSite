import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import About from "./components/about/About"
import Menu from "./components/menu/Menu";
import React, { useState } from 'react'
import "./app.scss"

const App = () => {
  const [menuOpens,setMenuOpens] = useState(false);
  const [leftBar,setLeftBar] = useState(false);
  return (
    <div className="app"> 
      <Navbar menuOpens={menuOpens} setMenuOpens={setMenuOpens} leftBar={leftBar} setLeftBar={setLeftBar}></Navbar>
      <Menu menuOpens={menuOpens} setMenuOpens={setMenuOpens}></Menu>
      <div className="sections">
        <Intro></Intro>
        {/* <About></About> */}
        <Skills></Skills>
        <Portfolio></Portfolio>
      </div>
    </div>
  );
}

export default App;