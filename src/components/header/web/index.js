import React from 'react'
import "./web.css"

function Web() {
    return (
        <div className="web-menu">

                    <div className="web-menu-item">
                            <a href="/">
                                Home
                            </a>
                    </div>
            
                    <div className="web-menu-item">
                            <a href="#About">
                                About
                            </a>
                    </div>
                    <div className="web-menu-item">
                            <a href="#Skills">
                                Skills
                            </a>
                    </div>
                    <div className="web-menu-item">
                            <a href="#Projects">
                                Projects
                            </a>
                    </div>
                    <div className="web-menu-item">
                            <a href="#Education">
                                Education
                            </a>
                    </div> 
                    <div className="web-menu-item">       

                            <a href="#Contact">
                                Contact
                            </a>
                    </div>

                   
            
        </div>
    )
}

export default Web
