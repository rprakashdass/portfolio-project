// import React from 'react';
import '../assets/styles/projects.css';
import { Link } from 'lucide-react';


const projects = [
    {
        title: 'Excel Data Uploader',
        description: 'Quickstart learning Flask with product templates.',
        extendedDescription: 'This project offers a deep dive into Flask development for rapid data uploads and manipulation using Excel files.',
        category: 'Web Development',
        skills: ['Flask', 'Python', 'Excel'],
        link: 'https://www.kaggle.com/rprakashdass/competitions',
    },
    {
        title: 'Handwritten Text Recognition Neural Network',
        description: 'Custom neural network to recognize handwritten text.',
        extendedDescription: 'Designed and implemented a neural network for recognizing handwritten text.',
        category: 'Machine Learning',
        skills: ['Neural Networks', 'Python'],
        link: 'https://www.kaggle.com/rprakashdass/competitions',
    },
    {
        title: 'Diabetic Prediction App',
        description: 'Streamlit app for diabetic prediction.',
        extendedDescription: 'Created using Streamlit, this application helps predict the likelihood of a user being diabetic.',
        category: 'Data Science',
        skills: ['Streamlit', 'Machine Learning'],
        link: 'https://github.com/rprakashdass/Diabetic-Prediction',
    },
    {
        title: 'Real-time Face Recognition',
        description: 'Real-time face recognition using OpenCV and Python.',
        extendedDescription: 'A real-time face recognition system using OpenCV and Python.',
        category: 'Computer Vision',
        skills: ['OpenCV', 'Python'],
        link: 'https://github.com/rprakashdass/Realtime_FaceRecognition',
    },
    {
        title: 'Client Management System',
        description: 'Manage business operations with PHP and SQL.',
        extendedDescription: 'Developed using PHP and SQL, this system provides businesses with a comprehensive client management solution.',
        category: 'Web Development',
        skills: ['PHP', 'SQL'],
        link: 'https://github.com/rprakashdass/Client-Management-System',
    },
    {
        title: 'Virtual Assistant',
        description: 'Google Speech Recognition based assistant.',
        extendedDescription: 'This mini project utilizes Google’s Speech Recognition API to create a virtual assistant.',
        category: 'AI',
        skills: ['Python', 'Speech Recognition'],
        link: 'https://github.com/rprakashdass/VirtualAssistant',
    },
    {
        title: 'NLP Mini Project',
        description: 'Stemming and lemmatization using NLP techniques.',
        extendedDescription: 'This project focuses on document analysis using techniques like stemming and lemmatization.',
        category: 'NLP',
        skills: ['NLP', 'Python'],
        link: 'https://colab.research.google.com/drive/1o9oB0NRuZQqSafUp7931d7VIiNmy4miq?usp=sharing',
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="">
                <div className="row justify-content-between">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="project-card" style={{ width: '300px', height: '400px', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <h3>{project.title} <a href={project.link} target="_blank" rel="noopener noreferrer"><span className='end-0 top-0 text-danger pointer'><Link/></span></a></h3>
                                    <hr></hr>
                                    <div className="project-category">
                                        <strong>{project.category}</strong>
                                    </div>
                                    <hr></hr>
                                    <div className="project-skills">
                                        <strong>{project.skills.join(', ')}</strong>
                                    </div>
                                    <hr></hr>
                                    <p>{project.extendedDescription}</p>
                                </div>
                                {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Project</a> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
