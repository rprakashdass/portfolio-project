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
        'decription' : 'yep, this is the project description',
        'link' : 'https://www.kaggle.com/rprakashdass/competitions',
        'imglink' : excel,
    },
    {
        'title' : 'Custom Handwritten Text Recognition Neural Network',
        'decription' : '',
        'link' : 'https://www.kaggle.com/rprakashdass/competitions',
        'imglink' : hd,
    },
    {   
        'title' : 'Diabetic Prediction - Streamlit',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://github.com/rprakashdass/Diabetic-Prediction',
        'imglink' : dp
    },
    {
        'title' : 'Realtime Face Recognition Project',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://github.com/rprakashdass/Realtime_FaceRecognition',
        'imglink' : face
    },
    {
        'title' : 'Client Management System - Business Operations with PHP and SQL',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://github.com/rprakashdass/Client-Management-System',
        'imglink' : cms
    },
    {
        'title' : 'Virtual Assistant - MiniProject',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://github.com/rprakashdass/VirtualAssistant',
        'imglink' : vas
    },
    {
        'title' : 'Natural Language Processing - Mini Project',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://colab.research.google.com/drive/1o9oB0NRuZQqSafUp7931d7VIiNmy4miq?usp=sharing',
        'imglink' : nlp
    },
]


export default function Projects() {
    function Modal(){
        const modelStyle = {
            position : "relative",
            color : "white",
            zIndex : 9999,
            margin: "0 auto",
        }
        return (
            <div style={modelStyle}>
                <button style={{color:"violet"}} onClick={()=>{setOpenModal(false)}}>X</button>
                <h2 className='title'>Project Name</h2>
                <hr></hr>
                <h3>Description</h3>
                <p>List the project description </p>
                <p>This the image</p>
            </div>
        );
    }
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <>
            {openModal && <Modal/>}
        <div id='projects' className='project-sec'>
            {projects.map((project, index) => (
                <div key={project.index} className='project' onClick={
                    ()=>{
                        setOpenModal(true);
                    }
                } style={{backgroundColor : "blue"}}>
                    <img src={project.imglink} alt='pic instead' className="pointer" />
                    {/* <a href={project.link}><h4 className='center'>{project.title}</h4></a> */}
                </div>
            ))}
        </div>
    </>
    );
}
