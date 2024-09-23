const experienceData = [
  {
      company: "Rotaract Club of Sri Shakthi Institute",
      logo: "path/to/logo.png", // Replace with actual logo path
      position: "Community Service Director",
      location: "Coimbatore, India",
      contract: "Volunteer",
      period: {
          from: new Date(2023, 0), // January 2023
          to: new Date(2024, 0) // January 2024
      },
      shortDescription: "Leading community service initiatives.",
      skills: [
          { name: "Leadership", logo: "path/to/leadership-icon.png" }, // Replace with actual icon path
          // Add more skills as needed
      ],
  },
  {
      company: "Rotaract Club of Sri Shakthi Institute",
      logo: "path/to/logo.png",
      position: "All Avenue Chair",
      location: "Coimbatore, India",
      contract: "Volunteer",
      period: {
          from: new Date(2024, 0), // January 2024
          to: null // Present
      },
      shortDescription: "Overseeing all avenues of service.",
      skills: [
          { name: "Coordination", logo: "path/to/coordination-icon.png" }, // Replace with actual icon path
          // Add more skills as needed
      ],
  },
];


import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { Icon } from 'lucide-react'; // Adjust according to your import path

const EducationExperience = ({ experience }) => {
    const { company, logo, position, location, contract, period, shortDescription, skills } = experience;

    const from = `${period.from.getMonth() + 1}/${period.from.getFullYear()}`;
    const to = period.to ? `${period.to.getMonth() + 1}/${period.to.getFullYear()}` : 'Present';

    return (
        <div className="experience-card">
            <img src={logo} alt={`${company} logo`} className="experience-logo" />
            <h3>{position} at {company}</h3>
            <p>{location}</p>
            <p>{contract}</p>
            <p>{from} - {to}</p>
            <p>{shortDescription}</p>
            <div className="skills">
                {skills.map(skill => (
                    <div key={skill.name} className="skill">
                        <img src={skill.logo} alt={`${skill.name} icon`} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

EducationExperience.propTypes = {
    experience: PropTypes.shape({
        company: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        contract: PropTypes.string.isRequired,
        period: PropTypes.shape({
            from: PropTypes.instanceOf(Date).isRequired,
            to: PropTypes.instanceOf(Date),
        }).isRequired,
        shortDescription: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                logo: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};


export default EducationExperience;
