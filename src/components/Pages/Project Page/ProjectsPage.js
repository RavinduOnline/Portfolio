import Header from '../../header'
import Footer from '../../footer'
import "./ProjectPage.css";
import { ProjectsData } from '../../body/project/data/projectsData';
import ProjectMiniCard from './ProjectMiniCard.js';

export default function ProjectsPage() {

  const data = ProjectsData;

  return (
    <div>
            <div >
                <Header/>
            </div>

            <div className='ProjectsPage-body'>
              <div className='ProjectsPage-title-box'>
                <p>Projects</p>
                <hr/>
              </div>
              <div className='ProjectsPage-card-gride'>
                {data.map((project)=>{
                    return   <ProjectMiniCard project={project}/>;
                })}

            </div>

                
            </div>

            <div>
                <Footer/>
           </div>
            
        </div>
    
  )
}
