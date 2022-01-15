import React from 'react'
import "./eduCard.css"

function EduCard({item}) {
    return (
        <div data-aos="flip-down" className="educard-main-box">
            
            
            <div className="educard-item-box">

            <img className="educard-item-img" src={item.logo}/>

                <div className="educard-item-box2">

                        <label className="educard-item-name">{item.institute}</label>

                        <div className="educard-date">
                            <label>{item.date}</label>
                        </div>

                        <div className="educard-type">
                            <label>{item.type}</label>
                        </div>

                        <div className="educard-item-dis">
                            <p>{item.about}</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default EduCard
