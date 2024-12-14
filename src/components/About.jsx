// Image
import avatar from '/logos/me.png';

function About() {
  const containerStyle = {
    textAlign: 'center',
    padding: '5% 10%',
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
  };

  const avatarStyle = {
    width: '180px',
    borderRadius: '50%',
    marginBottom: '20px',
  };

  const highlightText = {
    fontWeight: 'bold',
    fontSize: '36px',
    color: '#00d1b2',
  };

  const descriptionText = {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '30px',
  };

  const buttonStyle = {
    backgroundColor: '#00d1b2',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 30px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background 0.3s ease',
  };

  return (
    <section style={containerStyle}>
      <div className="about-content">
        <img src={avatar} alt="Avatar" style={avatarStyle} />
        <h1 style={highlightText}>Hi, I’m Prakash Dass</h1>
        <p style={descriptionText}>
          I’m an aspiring AIML engineer dedicated to solving problems through technology. 
          I focus on creating cutting-edge AI solutions while fostering innovation. 
          Let’s work together to make impactful innovations!
        </p>
        <button style={buttonStyle}><a href='#education'>Explore</a></button>
      </div>
    </section>
  );
}

export default About;
