import React from 'react'
import "./education.css";
import Separator from "../../../common/Separator/Separator"
import {EduData} from "./eduData"
import EduCard from './eduCard';

    const data = EduData;
function Education() {
    return (
        <div className="edu-main-box">
            <Separator/>

            <label data-aos="zoom-in" className="section-title">- Education -</label> 

            <div className="Edu-list">
                {data.map((item)=> {
                    return(
                        <EduCard item={item}/>
                    );
                })}
            </div>

        </div>
    )
}

export default Education
