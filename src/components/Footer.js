import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <LinkedInIcon onClick=
                    {() =>
                        window.open('https://www.linkedin.com/in/karimtrabelsi', '_blank')
                    }
                />
                <GitHubIcon onClick=
                    {() =>
                        window.open('https://github.com/karimDevWM?tab=repositories', '_blank')
                    }
                />
            </div>
            <p> &copy; 2022 </p>
        </div>
    )
}

export default Footer