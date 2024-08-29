 import insta from './images/socialMedia/insta.png';
import whatsapp from './images/socialMedia/whatsapp.png';
import kaggle from './images/socialMedia/kaggle.png';
import mail from './images/socialMedia/so.png';
import React, { useEffect } from 'react';
// #bfb4b4
const socialmedia = [
        {
            'title' : 'Kaggle',
            'image' : kaggle,
            'link' : 'https://kaggle.com/rprakashdass',
            'description' : `This is Description You can Log in and View  my profile
            This is Description You can Log in and View  my profile
            This is Description You can Log in and View  my profile`,
            'badge' : 'Repo\'s',
        },
        {
            'title' : 'Instagram',
            'image' : insta,
            'link' : 'https://instagram.com/rprakashdass',
            'description' : `This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile`,
            'badge' : 'Repo\'s',
        },
        {
            'title' : 'Whatsapp',
            'image' : whatsapp,
            'link' : 'https://github.com/',
            'description' : `This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile`,
            'badge' : 'Repo\'s',
        },
        {
            'title' : 'Gmail',
            'image' : mail,
            'link' : 'mailto:rprakashdass@gmail.com',
            'description' : `This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile`,
            'badge' : 'Repo\'s',
        },
]

function Linkedin(){
    return (
        <>
            <div><img src={require('./images/socialMedia/linkedincopy.png')} alt='linkedin'></img></div>
            <p className=''>Check out my 20+ projects, i do actively code and push things in github. Ask me any doubts, Suggest me any projects, Make a request.Conntact me for any collaboration</p>
        </>
    );
}

function GitHubCard() {
    useEffect(() => {
        // Load the GitHub cards script
        const script = document.createElement('script');
        script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component is unmounted
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="github-card"
                data-github="rprakashdass"
                data-width="400"
                data-height="317"
                data-theme="medium">
            </div>
            <p className=''>Check out my 20+ projects, i do actively code and push things in github. Ask me any doubts, Suggest me any projects, Make a request.Conntact me for any collaboration</p>
        </>
    );
}

export default function SocialMedia(){
    return (
        <>
        <div className='profile-cards'>
                <div className='item'><GitHubCard/></div>
                <div className='item' ><Linkedin/></div>
        </div>
        <div className='social-media'>
        {
            socialmedia.map((key) =>
                <div key={key.title} className='items'>
                        {/* <h3 className='card-title text-center'>{key.title}</h3> */}
                        <a href={key.link}>
                            <img src={key.image} alt="icon"/>
                         </a>
                </div>
            )
        }
        </div>
        </>
    );
}