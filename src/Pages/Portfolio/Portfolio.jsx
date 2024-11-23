import '..//../App.css';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import { SocialMedia, Connect } from './components/Socialmedia.jsx';
import ResumeSection from './components/Resume.jsx';
import EducationSection from './components/EducationExpirience.jsx';

function Portfolio(){
  return (
    <main className='app container-fluid'>
      <div style={{ position: "absolute", left: "0", top: "0" }}>
        <Header />
      </div>

      <h2 className="section-title mb-5" id="education"><center>Education</center></h2>
      <section>
        <EducationSection/>
      </section>

      <h2 className='section-title' id="skills" style={{marginTop: "10%"}}><center>Skills</center></h2>
      <section className='m-5'>
        <Skills />
      </section>

      <h2 className='section-title' id="projects" style={{marginTop: "10%"}}><center>Projects</center></h2>
      <section>
        <Projects />
      </section>

      <section id="resume">
        <ResumeSection />
      </section>

      <section id='social-media'>
        <Connect/>
        <SocialMedia />
        <br/>
        <br/>
      </section>

    </main>
  );
}

export default Portfolio;