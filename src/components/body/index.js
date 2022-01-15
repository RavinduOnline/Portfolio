import React from 'react'
import About from './about/About'
import Skills from './skills/Skills'
import Projects from './project/Projects'
import Education from './education/Education'
import Contact from './contact/Contact'
import "./body.css"

function Body() {
    return (
        <div className="body">
                <section id="About">
                    <About/>
                </section>
                <section id="Skills">
                    <Skills/>
                </section>
                <section id="Projects">
                    <Projects/>
                </section>
                <section id="Education">
                    <Education/>
                </section>
                <section id="Contact">
                    <Contact/>
                </section>
            
        </div>
    )
}

export default Body
