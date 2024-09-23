import '../assets/styles/skills.css';

const skills = {
    'Programming' : [
        {name: 'C', icon: ''},
        {name: 'C++', icon: ''},
        {name: 'Python', icon: ''},
        {name: 'Java', icon: ''},
    ],

    'Frontend': [
        { name: 'HTML', icon: ''},
        { name: 'CSS', icon: ''},
        { name: 'Boostrap', icon: ''},
        { name: 'Javascript', icon: ''},
        // { name: 'JavaScript', icon: 'Add interactivity and dynamic content to web apps' },
        // { name: 'Django', icon: 'Python-based framework for backend development' },
        // { name: 'MERN', icon: 'Full stack development using MongoDB, Express, React, and Node.js' }
    ],
    'Frameworks' : [
        { name: 'Tensorflow', icon: ''},
        { name: '', icon: ''},
    ],
    'Backend': [
        {name: 'Express', icon: ''},
        { name: 'MySQL', icon: '' },
        { name: 'MongoDB', icon: '' },
        { name: 'Django', icon: ''},
    ],
    'Machine Learning': [
        { name: 'Python', icon: '' },
        { name: 'Scikit-learn', icon: '' },
        { name: 'Artificial Neural Networks', icon: '' },
        { name: 'Computer Vision', icon: '' },
        { name: 'Natural Language Processing', icon: 'Enabling machines to understand and respond to human language' }
    ],
    'Artificial Intelligence': [
        { name: 'Generative Adversarial Networks', icon: 'Deep learning models for generating new data' },
        { name: 'Natural Language Processing', icon: 'AI systems that understand and process human language' },
        { name: 'Generative Intelligence', icon: 'AI capable of creating new, innovative outputs' },
        { name: 'Neural Networks', icon: 'Computational models for AI, simulating biological neurons' }
    ]
};


function Skills() {
    return (
        <section id="skills" className="skills m-5">
            <div className="skills-container">
                {Object.entries(skills).map(([category, skillsList], index) => (
                    <div key={index} className="category-section">
                        <div className="row align-items-center g-3 mb-4">
                        {/* Left Line */}
                        <div className="col-auto">
                            <div className="bg-secondary" style={{ height: '1px', width: '20px' }}></div>
                        </div>

                        {/* Text in the middle */}
                        <div className="col-auto">
                            <h6 className="text-secondary mb-0">{category}</h6>
                        </div>

                        {/* Right Line (Flexible Width) */}
                        <div className="col">
                            <div className="bg-secondary" style={{ height: '1px', width: '100%' }}></div>
                        </div>
                        </div>

                        <div className="cards-wrapper">
                            {skillsList.map((skill, skillIndex) => (
                                <div className="skill-card" key={skillIndex}>
                                    <h5 className='mb-0'>{skill.name} <span></span> </h5>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


// const Skills = () => {
//     const skillStyle = {
//         color: "#f8f8f8",
//         height: "50px"
//     }
//     return (
//         <>
//             <div className='row justify-content-start'>
//                     <div className='border border-3 border-danger col-md-2 m-5'>
//                         <h1>Typescript</h1>
//                     </div>
//                     <div style={skillStyle} className='border border-danger col-md-2 text-white m-5'>
//                         Typescript
//                     </div>
//                     <div className='border border-3 border-danger col-md-2'>
//                         <h1>Typescript</h1>
//                     </div>
//                     <div className='border border-3 border-danger col-md-2'>
//                         <h1>Typescript</h1>
//                     </div>
//                     <div className='border border-3 border-danger col-md-2'>
//                         <h1>Typescript</h1>
//                     </div>
//                     <div className='border border-3 border-danger col-md-2'>
//                         <h1>Typescript</h1>
//                     </div>
//             </div>
//         </>
//     );
// }

export default Skills;