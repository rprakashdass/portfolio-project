// Image
import profile from '../assets/images/me.png'

function About() {
  return (
    <section id="about" className="row text-light py-5">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          src={profile}
          alt="My Profile"
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center p-5">
        <h1 className="display-4 mb-4 title">Im Prakash Dass R</h1>
        <p className="lead">
          I am a passionate AIML engineer, and I welcome you to my portfolio. Lets make bigger innovations together! 
          With a strong background in engineering, statistics, and machine learning, I enjoy solving business problems 
          using tailored data and algorithms. My expertise lies in connecting ideas across disciplines and effectively 
          communicating complex technical concepts to non-technical stakeholders.
        </p>
      </div>
    </section>
  );
}

export default About;
