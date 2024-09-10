import './App.css';
import TopNav from './header.js';
import Skills from './skills.js';
import SocialMedia from './socialmedia';
import Projects from './projects.js';
import ImageSlider from './imageSlider.js';
import React from "react";
import QuotesGenerator from './inspirationGenerator.js';
import Footer from './footer.js';

function App() {
  const sectionStyle = {
    width: "700px",
    height: "400px",
    margin: "0 auto",
  }
  return (
    <div className="App">
      <TopNav/>
      <Body>
        <About/>
        <h2 className='title' id='title-grad'>Skills</h2>
        <Skills/>
        <hr style={{marginTop:"180px", marginBottom:"140px", color:"#130a1b"}}/>
        <div style={sectionStyle}>
          <h2 class="center" style={{color:"grey", fontWeight:100}}>Know more</h2>
          <ImageSlider/>
        </div>
        <hr style={{marginTop:"180px", color:"#130a1b"}}/>
        <h2 className='title' id='titl  e-grad'>Projects</h2>
        <Projects/>
        <h2 className='title' id='title-grad'>Social Media</h2>
        <SocialMedia/>
      </Body>
      <Footer>
        <QuotesGenerator/>
      </Footer>
    </div>
  );
}

function Body({children}){
  return (
    <section style={{ marginBottom : "25px",margin : "0px 5rem"}}>
      {children}
    </section>
  );
}

function About(){
  return (
    <section id='about' className='about'>
      <div className='i-container'>
        <img src={require('./images/me.png')} alt='My Profile'></img>
      </div>
      <div className='about-text'>
        <h1 className='title'>I'm Prakash Dass R</h1>
        <p>Iam a pasionate AIML engineer, i welcome to my portfolio. Let us make bigger innovation all together. I am an aspiring Machine learning engineer who enjoys connecting the dots: be it ideas from different disciplines, people from different teams, or applications from different industries. I have strong technical skills and an academic background in engineering, statistics, and machine learning. My passion lies in solving business problems with tailored data and algorithms and communicating complex ideas to non-technical stakeholders. I am able to jump across verticals to deliver high-performing AI solutions.</p>
      </div>
  </section>
  );
}

export default App;