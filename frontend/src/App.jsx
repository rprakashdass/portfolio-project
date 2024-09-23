import './App.css';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import { SocialMedia, Connect } from './components/Socialmedia.jsx';
import ResumeSection from './components/Resume.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className='app container-fluid'>
      <div style={{ position: "absolute", left: "0", top: "0" }}>
        <Header />
      </div>
      <section id="about" className={activeSection === 'about' ? 'active' : ''} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <About />
      </section>
      <section id="skills" className={activeSection === 'skills' ? 'active' : ''}>
        <Skills />
      </section>
      <section id="projects" className={activeSection === 'projects' ? 'active' : ''}>
        <Projects />
      </section>
      <section id="resume" className={activeSection === 'resume' ? 'active' : ''}>
        <ResumeSection />
      </section>
      <section id="contact" className={activeSection === 'contact' ? 'active' : ''}>
        <Connect />
      </section>
      <SocialMedia />
    </main>
  );
}

export default App;
