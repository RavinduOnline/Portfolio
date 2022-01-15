import React from 'react'
import "./mobile.css" 

function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className="mobileMenu">
            
            <div className="close-icon" onClick={() => setIsOpen(!isOpen) }>
 
                <i class="far fa-window-close"></i>

            </div>
            <div className="mobile-menu-item-box">

                    <div className="mobile-menu-item">
                            <a href="/">
                                Home
                            </a>
                    </div>
                    <div className="mobile-menu-item">
                            <a href="#About">
                                About
                            </a>
                    </div>
                    <div className="mobile-menu-item">
                            <a href="#Skills">
                                Skills
                            </a>
                    </div>
                    <div className="mobile-menu-item">
                            <a href="#Projects">
                                Projects
                            </a>
                    </div>
                    <div className="mobile-menu-item">
                            <a href="#Education">
                                Education
                            </a>
                    </div> 
                    <div className="mobile-menu-item">       

                            <a href="#Contact">
                                Contact
                            </a>
                    </div>
            </div>
        </div>
    )
}

export default Mobile
