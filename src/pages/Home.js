import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Karim</h2>
        <div className='prompt'>
          <p>
            A web developer with a passion for learning and creating
          </p>
          <LinkedInIcon />
          <GithubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>HTML, CSS, Bootstrap, NPM, Javascript</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>PHP, Python, Flask, Symfony</span>
          </li>
          <li className='item'>
            <h2>Database</h2>
            <span>SQL server, Mysql</span>
          </li>
          <li className='item'>
            <h2>Transversal</h2>
            <span>GitHub, Gitlab, Git versioning, Trello, Linux, Ubuntu</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Python, PHP, C#, Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home