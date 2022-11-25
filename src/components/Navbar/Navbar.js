import React, { useState } from "react";
import './navbar.scss';
import Logo from "../../assets/H&H-logo.png"
import { FaGithub , FaVimeo, FaGoogle } from 'react-icons/fa';

function Navbar({menuOpens,setMenuOpens}){
    const onClick = () => {
        setMenuOpens(!menuOpens);
    }
    const clipBoard = () => {
        navigator.clipboard.writeText("sddsk1123@gmail.com")
        alert("Mail address Clipboard !")
    }
    return(
        <>
            <div className={"navbar "+ (menuOpens && "active")}>
                <div className="wrapper">
                    <div className="left">
                        <a href="#intro" className="logo"><img src={Logo} className="logoImage"></img></a>
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
            <div className="leftbar">
                <div className="wrap">
                    <a target="_blank" rel="noreferrer" href="https://github.com/hyunwung" className='logos'>{<FaGithub></FaGithub>}</a>
                    <a target="_blank" rel="noreferrer" href="https://velog.io/@sddsk" className='logos'>{<FaVimeo></FaVimeo>}</a>
                    <a rel="noreferrer" onClick={()=>clipBoard()} className='logos'>{<FaGoogle></FaGoogle>}</a>
                </div>
            </div>
        </>
    );
}
export default Navbar;