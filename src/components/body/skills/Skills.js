import React from 'react'
import Separator from "../../../common/Separator/Separator"
import Skillcard from './skillcard';
import "./skills.css"
import { SkillsData } from './skillsData'

    const data  = SkillsData;
     
function Skills() {
    return (
        <div className="skills-main-box">
            <Separator/>

            <label data-aos="zoom-in" className="section-title">- Skills -</label> 

            <div data-aos="zoom-in" className="skills-card-box">
                {data.map((item)=> {
                    return(
                    <div className="skills-section">
                        <label className="skills-section-title">{item.type}</label>

                        <div className="skills-list">
                            {item.list.map((skill)=> {
                                return(
                                    <Skillcard skill={skill}/>
                                );
                            })}
                        </div>

                    </div>)
                })}
            </div>

        </div>
    )
}

export default Skills
