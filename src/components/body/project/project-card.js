
import React from 'react'
import "./project-card.css"

function ProjectCard({ project }) {
    return (
        <div data-aos="flip-left" className="project-card-box">
            <div className="project-info">
                <label className="project-tittle">{project.title}</label>
                <p className="project-card-date">{project.date}</p>

                <div className="project-links">
                    {project.demo&& 
                    <a target="_blank" className="project-link" href={project.demo}>
                        <div className="project-link-btn">
                            <i class="fas fa-globe"></i> &nbsp; Demo
                        </div>
                    </a>}


                    {project.github&& 
                    <a target="_blank" className="project-link" href={project.github}>
                        <div className="project-link-btn">
                            <i class="fab fa-github"></i> &nbsp; Github
                        </div>
                    </a>}

                </div>

                <p className="project-about">{project.about}</p>
                <div className="project-tag">{project.tags.map((tag) => {
                    return(
                        <label className="tag">{tag}</label>
                    )
                })}</div>
                
            </div>

            <img src={project.image}  className="project-pic"/>


        </div>
    )
}

export default ProjectCard
