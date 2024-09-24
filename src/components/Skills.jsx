import '../assets/styles/skills.css';
import c from '/logos/c.svg';
import cpp from '/logos/cpp.svg';
import python from '/logos/python.png';
import java from '/logos/java.png';
import html from '/logos/html.svg';
import css from '/logos/css.svg';
import bs from '/logos/bootstrap.svg';
import js from '/logos/js.png';
import react from '/logos/react.svg';
import node from '/logos/node.png';
import dj from '/logos/django.svg';
import express from '/logos/express.png';
import flask from '/logos/flask.svg';
// import mangodb from '/logos/mangodb.svg';
// import sql from '/logos/sql.svg';
// import sqlite from '/logos/css.svg';
// import git from '/logos/css.svg';
// import figma from '/logos/css.svg';




const skills = {
   'programming Languages': [
        { name: 'C', logo: c },
        { name: 'C++', logo: cpp },
        { name: 'Python', logo: python },
        { name: 'Java', logo: java },
    ],
    'webDevelopment': [
        { name: 'HTML', logo: html },
        { name: 'CSS', logo: css },
        { name: 'Bootstrap', logo: bs},
        { name: 'JavaScript', logo: js },
    ],
    'frameworks': [
        { name: 'Node.js', logo: node },
        { name: 'Express.js', logo: express },
        { name: 'Flask', logo: flask},
        { name: 'Django', logo: dj },
        { name: 'Tensorflow', logo: '' },
    ],
    'Libraries': [
        { name: 'React', logo: react },
        { name: 'Pandas', logo: ''},
        { name: 'Matplotlib', logo: ''},
        { name: 'Seaborn', logo: ''},
    ],
    'databases': [
        { name: 'MongoDB', logo: '' },
        { name: 'MySQL', logo: '' },
        { name: 'SQLite', logo: '' },
    ],
    'tools': [
        { name: 'Git', logo: '' },
        { name: 'Figma', logo: '' },
    ],
};


function Skills() {
    return (
        <section id="skills" className="skills m-5">
            <div className="skills-container">
                {Object.entries(skills).map(([category, skillsList], index) => (
                    <div key={index} className="category-section">
                        <div className="row align-items-center g-3 mb-4">
                            <div className="col-auto">
                                <div className="bg-secondary" style={{ height: '1px', width: '20px' }}></div>
                            </div>

                            <div className="col-auto">
                                <h6 className="text-secondary mb-0">{category}</h6>
                            </div>

                            <div className="col">
                                <div className="bg-secondary" style={{ height: '1px', width: '100%' }}></div>
                            </div>
                        </div>
                        <div className="cards-wrapper">
                            {skillsList.map((skill, skillIndex) => (
                                <div className="skill-card row me-5 justify-content-center" key={skillIndex}>
                                    <h5 className='skill-item col-8'>{skill.name}</h5>
                                    {skill.logo && (
                                        <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo col" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


export default Skills;