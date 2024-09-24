
const works = [
    {
        title: 'Deepfake Detection',
        description: '',
        extendedDescription: 'This project aims to solve a major social problem, the growing technology leads to have advanced security systems and algorithms. Hence, our model helps to detect deepfake images from videos resulting in an accuracy of 86%',
        category: 'Web Development',
        link: 'https://www.kaggle.com/rprakashdass/competitions',
    },
    {
        title: 'AI Premier Certification',
        description: '',
        extendedDescription: '',
        category: 'Infosys Springboard',
        link: 'https://www.kaggle.com/rprakashdass/competitions',
    }
]

const Features = () => {
    return (
        <>
            <div className="row">
                {
                    works.map((work, i) => {
                        <div className="col" key={i}>
                            {work.title}
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Features;