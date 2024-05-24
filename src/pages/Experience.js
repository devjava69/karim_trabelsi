/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
}
  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css"
// import { Divider } from '@mui/material';
import { ExperienceList } from '../helpers/ExperienceList';

function Experience() {
  return (

    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      { ExperienceList.map((experience, index) => {
          return <VerticalTimelineElement id={index} className='vertical-timeline-element'
            date={experience.periode}
            iconStyle={ experience.type === "work" ? { background: "#e9d35b", color: "#fff" } : { background: "#3e497a", color: "#fff" } }
            icon={ experience.type === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <h3 className='vertical-timeline-element'>{experience.title}</h3>
            <p><em>{experience.location}</em></p>
            <h4>Missions :</h4>
            <ul>
              { experience.description.map((mission, index) =>(
                <li key={index}>
                  {mission["mission"]} : <br></br>
                      <b>{mission["skills"]}</b>
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        }) }
        </VerticalTimeline>
    </div>





    // <div className='experience'>
    //   <VerticalTimeline lineColor='#3e497a'>
    //     { ExperienceList.map((experience, index) => {
    //       return 
    //     }) }
    //   </VerticalTimeline>
    // </div>
    
    
    
    
    
    // <div className='experience'>
    //   <VerticalTimeline lineColor='#3e497a'>

    //     <VerticalTimelineElement className='vertical-timeline-element'
    //       date="septembre 2022 - Mars 2024"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className='vertical-timeline-element'>Alternant Concepteur Développeur d'Applications + DevOps</h3>
    //       <p><em>LinkedIn Learning</em> - Lyon</p>
    //       <h4>Programme : </h4>
    //       <ul>
    //         <li>L'essentiel de React.js</li>
    //         <li>React.js : Gérer les états d'application</li>
    //         <li>L'essentiel de Node.js</li>
    //         <li>L'essentiel de MangoDB 4</li>
    //         <li>Node.js et Express : construire des API</li>
    //         <li>Créer un CRM avec React.js</li>
    //         <li>L'essentiel de Webpack 4</li>
    //       </ul>
    //       <h4>Compétences acquises : </h4>
    //       <p>Python, Flask, Linux, Mysql, Jinja2, Lampp, Visual Studio Code, SQL Alchemy,
    //         SQLite, Gitlab.
    //       </p>
    //       <Divider />
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement className='vertical-timeline-element'
    //       date="juin 2022 - juillet 2022"
    //       iconStyle={{ background: "#3e497a", color: "#fff" }}
    //       icon={<SchoolIcon />}
    //     >
    //       <h3 className='vertical-timeline-element'>Développeur React</h3>
    //       <p><em>LinkedIn Learning</em> - Lyon</p>
    //       <h4>Programme : </h4>
    //       <ul>
    //         <li>L'essentiel de React.js</li>
    //         <li>React.js : Gérer les états d'application</li>
    //         <li>L'essentiel de Node.js</li>
    //         <li>L'essentiel de MangoDB 4</li>
    //         <li>Node.js et Express : construire des API</li>
    //         <li>Créer un CRM avec React.js</li>
    //         <li>L'essentiel de Webpack 4</li>
    //       </ul>
    //       <h4>Compétences acquises : </h4>
    //       <p>Python, Flask, Linux, Mysql, Jinja2, Lampp, Visual Studio Code, SQL Alchemy,
    //         SQLite, Gitlab.
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement className='vertical-timeline-element'
    //       date='avril 2022 - juin 2022'
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className='vertical-timeline-element'>Développeur Web Python Flask</h3>
    //       <p><em>Wizwee</em> - Lyon</p>
    //       <h4>Tâches réalisées : </h4>
    //       <ul>
    //         <li>Tests sur les modèles</li>
    //         <li>Tests sur les contrôleurs</li>
    //         <li>Développement d'une fonctionnalité back end et tests modèles et contrôleurs</li>
    //       </ul>
    //       <h4>Compétences acquises : </h4>
    //       <p>Python, Flask, Linux, Mysql, Jinja2, Lampp, Visual Studio Code, SQL Alchemy,
    //         SQLite, Gitlab.
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement className='vertical-timeline-element'
    //       date='février 2022 - mars 2022'
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className='vertical-timeline-element'>Développeur Web Python Flask</h3>
    //       <p><em>Wizwee</em> - Lyon</p>
    //       <h4>Tâches réalisées : </h4>
    //       <ul>
    //         <li>Tests sur les modèles</li>
    //         <li>Tests sur les contrôleurs</li>
    //       </ul>
    //       <h4>Compétences acquises : </h4>
    //       <p>Python, Flask, Linux, Mysql, Jinja2, Lampp, Visual Studio Code, SQL Alchemy,
    //         SQLite, Gitlab.
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement className='vertical-timeline-element'
    //       date='octobre 2021 - juin 2022'
    //       iconStyle={{ background: "#3e497a", color: "#fff" }}
    //       icon={<SchoolIcon />}
    //     >
    //       <h3 className='vertical-timeline-element'>Formation développeur web FullStack</h3>
    //       <p> <em>Handigital</em> - Saint-Priest</p>
    //       <h4>Compétences acquises : </h4>
    //       <p>HTML, CSS, Javascript, Bootstrap, SASS, Wordpress intégrateur, Wordpress développeur,
    //         MYSQL, Linux, Ubuntu, Git, Github, Symfony, UX/UI design, Visual Studio code, PHP,
    //         Méthode Agile, Docker.
    //       </p>
    //     </VerticalTimelineElement>
    //   </VerticalTimeline>
    // </div>
  )
}

export default Experience