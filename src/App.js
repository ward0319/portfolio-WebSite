import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/work/Works"
import Contact from "./components/contact/Contact"
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
        <Portfolio></Portfolio>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;