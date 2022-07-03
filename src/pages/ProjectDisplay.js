import React from 'react';
import { useParams } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css";
import GithubIcon from '@material-ui/icons/GitHub'
import ArrowDownIcon from "@material-ui/icons/ArrowDownward";


function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id]
    return (
        <div className='project'>
            <h1> {project.name} </h1>
            <p>En cours de développement</p>
            <img src={project.image} />
            <p>Cliquer pour être redirigé sur le github</p>
            <ArrowDownIcon/>
            <GithubIcon
            onClick=
            {() =>
              window.open(project.github_url, '_blank')
            }
            />
            <p>
                <b>Compétences utilisés : </b> {project.skills}
            </p>
        </div>
    );
}

export default ProjectDisplay