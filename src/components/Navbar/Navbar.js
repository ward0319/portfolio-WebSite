import React, { useState } from "react";
import './navbar.scss';

function Navbar({menuOpens,setMenuOpens}){
    const onClick=()=>{
        setMenuOpens(!menuOpens);
    }
    return(
        <div className={"navbar "+ (menuOpens && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Home</a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={onClick}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;