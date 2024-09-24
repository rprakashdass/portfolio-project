import PropTypes from 'prop-types';
import { GraduationCap } from 'lucide-react';
// import { Volunteer } from 'lucide-react';



const cardStyle = {
  borderRadius: "15px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center"
};

  const contentStyle = {
    flex: 1,
    textAlign: "left"
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#a1c2bd"
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    color: "#6c757d",
    marginBottom: "10px"
  };

  const yearStyle = {
    fontSize: "1rem",
    color: "#6c757d",
    fontStyle: "italic",
    marginBottom: "10px"
  };

  const sectionStyle = {
    margin: "0 10%",
}

const borderStyle = {
    border: "1px solid #fff",
    borderRadius: "10px",
    padding: "3%",
}

const EducationCard = ({ degree, institution, year, description }) => {

  return (
    <div style={cardStyle} className="education-card">
      <div style={contentStyle}>
        <h3 style={titleStyle}>
          <GraduationCap size={28} className="me-2" />
          {degree}
        </h3>
        <h4 style={subtitleStyle}>{institution}</h4>
        <p style={yearStyle}>{year}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

EducationCard.propTypes = {
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };


  const VolunteerExperienceCard = ({ role, organization, year, description }) => {

    return (
      <div style={cardStyle} className="volunteer-experience-card">
        <div style={contentStyle}>
          <h3 style={titleStyle}>
            {role}
          </h3>
          <h4 style={subtitleStyle}>{organization}</h4>
          <p style={yearStyle}>{year}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  VolunteerExperienceCard.propTypes = {
    role: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string,
  };

function EducationSection() {
    return (
        <section className='' style={sectionStyle}>
        <div className="education-section" style={borderStyle}>
            <h2 className="text-white"><center>Academics</center></h2>
            <EducationCard
            degree="Bachelor of Technology in Artificial Intelligence and Machine Learning"
            institution="Sri Shakthi Institute of Engineering and Technology"
            year="2022 - 2026"
            description="Specializing in AI/ML, covering deep learning, computer vision, and data science."
            />
        </div>
        <div className='mt-5' style={borderStyle}>
            <h2 className="text-white"><center>Volunteer Experience</center></h2>
            <VolunteerExperienceCard
                role="Community Service Director"
                organization="Rotaract Club of Sri Shakthi Institute"
                year="2023 - 2024"
                description="Led various community service projects and initiatives."
            />
            <VolunteerExperienceCard
                role="All Avenue Chair"
                organization="Rotaract Club of Sri Shakthi Institute"
                year="2024 - Present"
                description="Had an opportunity to conduct sustainable projects for the community."
            />
        </div>
      </section>
    );
  }

export default EducationSection;
