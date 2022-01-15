import React, {useEffect}from 'react';
import "./about.css";
import {Typewriter} from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'; 
import RaviImg from "../../Images/ravinduPic.png";
import SocialMenu from '../socialMenu/SocialMenu';
import CV from "../../Documents/Ravindu Rasanga CV.pdf";



function About() {

    return (
        <div className="about-main-box">
            <div className="about-top">
                <div className="about-info">
                    <span className="about-title"> Hello! </span> <br/>
                    I am <span className="about-role"> 
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={['Ravindu Rasanga', 'an Undergraduate', ' a Developer', 'a Designer']}
                    /> </span> <br/><br/>
                    <span className="about-details">I'm mostly interested in Web Designing & Development and Mobile Application Development. I like always curious about new things and enjoy learning. </span>
                    <br/>
                    <a target="_blank" className="cv-dwn-a" href={CV}>
                    <button className="about-cv-btn">
                        Download CV
                    </button></a>

                    <div className="social-link">
                        <SocialMenu/>
                    </div>
                    
                </div>
                    <br/><br/>
                <div className="about-pic">
                    <img className="about-main-img" src={RaviImg} alt="My Pic"/>
                </div>

                <div className="about-bottom">
                        <SocialMenu/>
                </div>
            </div>
            
        </div>
        
    )
}

export default About
