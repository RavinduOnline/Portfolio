import React from 'react'
import Animi from "./404animi.svg"
import SocialMenu from "../../body/socialMenu/SocialMenu"
import Logo from "../../header/Images/sitelogo.png"
import "./Notfound.css"

function Notfound(props) {
    return (
        <div className="main-404-box">
            <div className="logo-box404">
            <img className="logo-404img" src={Logo} alt='logo' />
            </div>
            <h5 className="title404">Page Not Found!</h5>
            <img className="animi-404img" src={Animi} alt='404img'/>
            <a className="homebtn404" href="/"><button>BACK TO HOME</button></a>
            <div className="social-icon404"><SocialMenu/></div>
        </div>
    )
}

export default Notfound

