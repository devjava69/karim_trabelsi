import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css'
import { ProjectList } from '../helpers/ProjectList'


function Projects() {
  return (
  <div className='row'>
    <div className='col-sm col-md col-lg-3'>
      <div className='projects'>
        <h1>My Personal Projects</h1>
        <div className='projectList'>
          { ProjectList.map((project, index)=>{
            return <ProjectItem id={index} name={project.name} image={project.image}/>
          })}
      </div>
    </div>
    </div>
  </div>
  )
}
export default Projects
