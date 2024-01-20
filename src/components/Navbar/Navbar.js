import React, { useState } from "react";
import './navbar.scss';
import Logo from "../../assets/H&H-logo.png"
import { FaGithub , FaVimeo, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2'

function Navbar({menuOpens,setMenuOpens}){
    const Swal = require('sweetalert2')
    const onClick = () => {
        setMenuOpens(!menuOpens);
    }
    const clipBoard = () => {
        navigator.clipboard.writeText("sddsk1123@gmail.com")
        Swal.fire({
            background: "#fff",
            title:"메일 주소가 복사되었어요 !",
            color:"black",
        })
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
                    <a target="_blank" rel="noreferrer" href="https://github.com/ward0319" className='logos'>{<FaGithub></FaGithub>}</a>
                    <a target="_blank" rel="noreferrer" href="https://velog.io/@sddsk" className='logos'>{<FaVimeo></FaVimeo>}</a>
                    <a rel="noreferrer" onClick={()=>clipBoard()} className='logos'>{<FaGoogle></FaGoogle>}</a>
                </div>
            </div>
        </>
    );
}
export default Navbar;