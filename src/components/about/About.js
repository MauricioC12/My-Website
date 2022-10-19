import React from 'react';
import './About.css';
import fotoMe from '../assets/images/fotoMe.jpeg';

const About = () => {
  return (
    <div className='about-container' id='aboutme'>
      <div className='about-desc'>
        <h3>Let me tell you something about me:</h3>
        <p>Innovative and proactive Web Development student with a strong interest in Frontend and Backend. I have great ability to develop elegant web pages and application designs for demanding clients, to adapt to all kinds of environments and always bring the best of me. my best. I am characterized by my facility for teamwork, my enthusiasm for learning and developing my skills. I am looking for a job opportunity in which to gain more experience.</p>
      </div>
      <div className='about-img'>
        <img src={fotoMe} alt='About'/>
      </div>
    </div>
  )
}

export default About;