import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

// list of objects creation
export const ExperienceList = [
    {
        title: "Développeur React",
        location : 'Linkedin Learning',
        periode : `juin 2022 - Ajoourd'hui`,
        program: 
        [
            {'item':"1","title":`L'essentiel de React.js`},
            {'item':"2","title":`React.js : Gérer les états d'application`},
            {'item':"3","title":`L'essentiel de Node.js`},
            {'item':"4","title":`L'essentiel de MangoDB 4`},
            {'item':"5","title":`Node.js et Express : construire des API`},
            {'item':"6","title":`Créer un CRM avec React.js`},
            {'item':"7","title":`L'essentiel de Webpack 4"`},
        ],
        skills : "Python, Flask, Linux, Mysql, Jinja2, Lampp, Visual Studio Code, SQL Alchemy, SQLite, Gitlab.",
        icone : <SchoolIcon/>
    }
]