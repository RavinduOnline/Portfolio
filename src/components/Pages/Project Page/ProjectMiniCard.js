import React from 'react'
import "./ProjectMiniCard.css";

export default function ProjectMiniCard({ project }) {
    return (
        <div className='project-mini-card-main-container'>

            <div className='project-mini-card-container'>

            <div>
                <img src={project.image}  className="project-mini-card-img"/>
            </div>

            <div className='project-mini-card-container2'>
            
                <label className="project-tittle">{project.title}</label>

                <p className="project-card-date">{project.date}</p>

                <div className="project-mini-card-links">
                    <div className='project-mini-card-btn'>
                        {project.demo&& 
                        <a target="_blank" className="project-mini-card-links" href={project.demo}>
                            <div className="project-mini-card-link-btn">
                                <i class="fas fa-globe"></i> &nbsp; Demo
                            </div>
                        </a>}
                    </div>

                    <div className='project-mini-card-btn'>
                        {project.github&& 
                        <a target="_blank" className="project-mini-card-links" href={project.github}>
                            <div className="project-mini-card-link-btn">
                                <i class="fab fa-github"></i> &nbsp; Github
                            </div>
                        </a>}
                    </div>

                </div>

                <p className="project-mini-card-about">{project.about}</p>
                <div className="project-mini-card-tag-box">{project.tags.map((tag) => {
                    return(
                        <label label className="project-mini-card-tag">{tag}</label>
                    )
                })}</div>

</div>

</div>
                
            </div>
    )
}
