import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import Separator from '../../../common/Separator/Separator';
import { ProjectsData } from './data/projectsData';
import ProjectCard from './project-card';
import "./project.css";

function Projects() {


    const data = ProjectsData;

    return (
        <div className="projects-main-box">
            <Separator/>

            <label data-aos="zoom-in"  className="section-title">- Projects -</label>

            <div>
                {data.filter((item, index) => index < 3).map((project)=>{
                    return   <ProjectCard project={project}/>;
                })}

            </div>

            <a className='project-btn' href='/AllProjects'><button >VIEW ALL PROJECTS</button></a>

        </div>
    );
};

export default Projects
