import React from 'react';
import { useParams } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css";
import GithubIcon from '@material-ui/icons/GitHub'

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id]
    return (
        <div className='project'>
            <h1> {project.name} </h1>
            <img src={project.image} />
            <GithubIcon />
            <p>
                <b>Compétences utilisés : </b> {project.skills}
            </p>
        </div>
    );
}

export default ProjectDisplay