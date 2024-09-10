import excel from './images/projects/EXCEL_DATA.jpeg';
import hd from './images/projects/handwriten.jpeg';
import dp from './images/projects/diabetics_prediction.jpeg';
import nlp from './images/projects/nlp.jpeg';
import vas from './images/projects/virtual_assistant.jpeg';
import cms from './images/projects/cms.jpeg';
import face from './images/projects/face.jpeg';
import { useState } from 'react';

const projects = [
    {
        'title' : 'Excel Data Uploader',
        'description' : 'The Project is a great Quickstart to learn Flask and the products template is described in this repo. The project have been taken to implement project based learning to Students. Soon the final product will get released. Stay tuned! Do Explore to know the working of the project.',
        'link' : 'https://www.kaggle.com/rprakashdass/competitions',
        'imglink' : excel,
    },
    {
        'title' : 'Custom Handwritten Text Recognition Neural Network',
        'description' : 'Designed and implemented a neural network for handwritten text recognition from scratch using Python. The project focuses on recognizing handwritten characters, demonstrating my expertise in neural network architecture and training. Explore the code and delve into the intricacies of this custom solution on my GitHub repository',
        'link' : 'https://www.kaggle.com/rprakashdass/competitions',
        'imglink' : hd,
    },
    {
        'title' : 'Diabetic Prediction - Streamlit Application',
        'description' : 'Presenting the Diabetic Prediction App, a project created using Streamlit for streamlined user interaction. combining the simplicity of Streamlit with the significance of diabetic prediction. Check out the code on GitHub to explore the basics of predictive modeling and user interface design. Ideal for those starting out in data science and web development.',
        'link' : 'https://github.com/rprakashdass/Diabetic-Prediction',
        'imglink' : dp
    },
    {
        'title' : 'Realtime Face Recognition Project',
        'description' : 'Developed a real-time face recognition system using Python and OpenCV. Implemented Haar cascade classifiers for face detection and pre-trained deep learning models for facial recognition. Achieved high accuracy in identifying individuals from a live video stream. Demonstrated proficiency in image processing, machine learning, and computer vision techniques.',
        'link' : 'https://github.com/rprakashdass/Realtime_FaceRecognition',
        'imglink' : face
    },
    {
        'title' : 'Client Management System - Business Operations with PHP and SQL',
        'description' : 'The Client Management System, developed using PHP and SQL. This robust system is tailored to enhance business efficiency by providing a comprehensive solution for managing client interactions. From tracking communication to organizing vital information, this application simplifies client relationship management. Dive into the code on my GitHub repository and witness the power of seamless client management: https://github.com/rprakashdass/Client-Management-System',
        'link' : 'https://github.com/rprakashdass/Client-Management-System',
        'imglink' : cms
    },
    {
        'title' : 'Virtual Assistant - MiniProject',
        'description' : 'I Used Google\'s Speech recognition and implemented many functions to make it fun and useful.I learnt how to handle api requests, how to import implement various libraries.I found these type of projects helps to get started with python.',
        'link' : 'https://github.com/rprakashdass/VirtualAssistant',
        'imglink' : vas
    },
    {
        'title' : 'Natural Language Processing - Mini Project',
        'description' : 'This is my NLP mini project, where I implemented advanced techniques like stemming and lemmatization to enhance a model\'s ability to provide answers from documents. Check out the detailed notebook on Google Colab for insights into the natural language processing magic.',
        'link' : 'https://colab.research.google.com/drive/1o9oB0NRuZQqSafUp7931d7VIiNmy4miq?usp=sharing',
        'imglink' : nlp
    },
]

function Modal({open, close, selectedProject}){
    const modelStyle = {
        position : "absolute",
        color : "white",
        zIndex : 9999,
        backgroundColor: "black",
        padding: "2%",
        width: "50%",
        height: "50%",
        left: "20%",
        right: "20%",
        overflow: "hidden",
    }
    const buttonStyle = {
        padding: "0.9%",
        color: "white",
        backgroundColor: "blueviolet",
        cursor: "pointer",
        margin: "0.5%"
    }
    if(!open) return null;
    return (
        <div style={modelStyle}>
            <button style={{color:"violet", cursor: "pointer"}} onClick={close}>X</button>
            <h2 className='title'>Title : {selectedProject.title}</h2>
            <hr></hr>
            <h3 className='title'>Description:</h3>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.link} className='title'><button style={buttonStyle}>Visit</button></a>
        </div>
    );
}

export default function Projects() {
    const [openModal, setOpenModal] = useState(false);
    const [selectProject, setProject] = useState(null);

    function selectOpenProject(project){
       setProject(project);
       setOpenModal(true);
    }

    return (
        <>
            <Modal open={openModal} close={()=>{setOpenModal(false)}} selectedProject={selectProject}/>
            <div id='projects' className='project-sec'>
                {projects.map((project, index) => (
                    <div key={project.index} className='project' onClick={() => selectOpenProject(project)} style={{backgroundColor : "blue"}}>
                        <img src={project.imglink} alt='pic instead' className="pointer" />
                        {/* <a href={project.link}><h4 className='center'>{project.title}</h4></a> */}
                    </div>
                ))}
            </div>
        </>
    );
}
