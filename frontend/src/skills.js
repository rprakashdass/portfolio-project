const skills = {
    'Full Stack Development': ['HTML', 'CSS', 'JavaScript', 'React', 'Django'],
    'Machine Learning': ['Python', 'Scikit-learn', 'Artificial Neural Networks', 'Computer Vision'],
    'Artificial Intelligence': ['Generative Adversarial Networks', 'Natural Language Processing', 'Generative Intelligence']
};

export default function Skills() {
    return (
<section id="skills" className="skills">
    {Object.entries(skills).map(([category, skillsList], index) => (
        <div key={index} className={index % 2 === 0 ? 'section-left' : 'section-right'}>
            <h3 className="headline">{category}</h3>
            <div className="content">
                <ul>
                    {skillsList.map((skill, skillIndex) => (
                        <li key={skillIndex} > {skill} </li>
                    ))}
                </ul>
            </div>
        </div>
    ))}
</section>

    );
}
