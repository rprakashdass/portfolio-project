import insta from '../assets/images/socialMedia/insta.png';
import whatsapp from '../assets/images/socialMedia/whatsapp.png';
import kaggle from '../assets/images/socialMedia/kaggle.png';
import mail from '../assets/images/socialMedia/so.png';
import linkedinIcon from '../assets/images/socialMedia/logo_icon.png';
import githubIcon from '../assets/images/socialMedia/github.png';
// import linkedin from '../assets/images/socialMedia/linkedin.png';
// import github from '../assets/images/socialMedia/github.png';

// import { useEffect } from 'react';

import '../assets/styles/socialMedia.css'
import '../assets/styles/connect.css'; // Custom CSS
// #bfb4b4

const socialmedia = [
    {
        'title': 'Kaggle',
        'image': kaggle,
        'link': 'https://kaggle.com/rprakashdass'
    },
    {
        'title': 'Instagram',
        'image': insta,
        'link': 'https://instagram.com/rprakashdass'
    },
    {
        'title': 'Whatsapp',
        'image': whatsapp,
        'link': 'https://wa.me/yournumber'
    },
    {
        'title': 'Gmail',
        'image': mail,
        'link': 'mailto:rprakashdass@gmail.com'
    },
];


function Connect(){
    return (
        <section id="connect" className="connect-section">
            <div className="platform-box github-box">
                <img src={githubIcon} alt="GitHub" className="platform-icon" />
                <div className="platform-content">
                    <h2 className='text-white'>GitHub: Explore My Projects</h2>
                    <p>
                        On GitHub, you can explore my technical projects, including full-stack development,
                        machine learning models, and open-source contributions.
                        I showcase detailed code, project architecture, and documentation to help others.
                        understand my approach to problem-solving and software development.
                    </p>
                    <a href="https://github.com/rprakashdass" target="_blank" rel="noopener noreferrer">
                        <button className="cta-button">View My GitHub</button>
                    </a>
                </div>
            </div>

            <div className="platform-box linkedin-box">
                <img src={linkedinIcon} alt="LinkedIn" className="platform-icon" />
                <div className="platform-content">
                    <h2>LinkedIn: Lets Collaborate</h2>
                    <p>
                        On LinkedIn, I focus on professional networking, collaboration opportunities, 
                        and showcasing my expertise in AI, ML, and software development. 
                        Feel free to connect for professional inquiries, job opportunities, or collaborations on innovative projects.
                    </p>
                    <a href="https://linkedin.com/in/rprakashdass" target="_blank" rel="noopener noreferrer">
                        <button className='cta-button' style={{backgroundColor: "#333"}}>Connect on LinkedIn</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

const SocialMedia = () => {
    return (
        <section id="social-media" className="social-media-section">
            {/* Highlighted GitHub and LinkedIn */}
            {/* Other Social Media Icons */}
            <div className="secondary-icons">
                {socialmedia.map((media, index) => (
                    <a key={index} href={media.link} target="_blank" rel="noopener noreferrer">
                        <img src={media.image} alt={media.title} />
                    </a>
                ))}
            </div>
        </section>
    );
};

export {SocialMedia, Connect};
