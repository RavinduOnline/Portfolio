import React from 'react'
import "./socialMenu.css"
import { SocialData } from "../socialMenu/data/social"

function SocialMenu() {

    const data = SocialData;

    return (
        <div className="social-menu">
            {data.map((item)=>{
                return(
                    <a href={item.link}>
                        <div className="social-icon-div">
                            <img src={item.icon} className="social-icon"/>
                        </div>
                        
                    </a>
                )}
            )}
        </div>
    )
}

export default SocialMenu
