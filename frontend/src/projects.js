import excel from './images/projects/EXCEL_DATA.jpeg';
import hd from './images/projects/handwriten.jpeg';
import dp from './images/projects/diabetics_prediction.jpeg';
import nlp from './images/projects/nlp.jpeg';
import vas from './images/projects/virtual_assistant.jpeg';
import cms from './images/projects/cms.jpeg';
import face from './images/projects/face.jpeg';

const projects = [
    {
        'title' : 'Excel Data Uploader',
        'decription' : '',
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
    const showDesc = () => {
        return(
            <>
                <h2>Hi hello jnjewfg vhjfhg hgvj</h2>
            </>
        )
    }
    return (
        <div id='projects' className='project-sec'>
            {projects.map((project, index) => (
                <div key={project.index} className='project' onClick={showDesc}>
                    <img src={project.imglink} alt='pic instead' className="pointer" />
                    <a href={project.link}><h4 className='center'>{project.title}</h4></a>
                </div>
            ))}
        </div>
    );
}