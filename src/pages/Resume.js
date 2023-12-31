import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Resume.css';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Education from '../components/Education';


import '../scripts/resume.js';

function Resume(props) {
  return (
    <div className="Resume-Page">
      <Header />
      <div className='resume'>
        <h2 className='about-header button'><a href="/resume">View All</a></h2>
        <ul className='about-nav'>
          <li className='button'  style={props.skills ? {border:"solid"} : {border:"none"}}>Skills</li>
          <li className='button' style={props.education ? {border:"solid"} : {border:"none"}}>Education</li>
          <li className='button' style={props.experience ? {border:"solid"} : {border:"none"}}>Work Experience</li>
        </ul>
        <div id='about-background' className={props.skills ? "about-section" : "about-section hidden"}>
          <Skills />
        </div>

        <div id='about-education' className={props.education ? "about-section" : "about-section hidden"}>
          <Education />
        </div>

        <div id='about-experience' className={props.experience ? "about-section" : "about-section hidden"}>
          <Work />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
