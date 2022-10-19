import React from 'react';
import './Cover.css';
import coverVideo from '../assets/images/coverVideo.mp4';

const Cover = () => {
  return (
    <div id='home' className='cover-container'>
      <video className='video' src={coverVideo} autoPlay loop muted></video>
      <h1>Mauricio Contreras Rivas</h1>
      <p>Web Developer | Designer | Entrepeneur | Sports Manager</p>
    </div>
  )
}

export default Cover;