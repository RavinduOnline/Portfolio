import React, {useEffect}from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import "./skillcard.css"


function Skillcard({skill}) {

    return (
        <div data-aos="zoom-in" className="skill-card">
            <div className="skill-icon" >{skill.icon}</div>
            <label className="skill-name">{skill.name}</label>
        </div>
    );
}

export default Skillcard
