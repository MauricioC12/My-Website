import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-info' id='contact'>
        <h1>Contact me and let's work together!</h1>
        <p>Based in Lima - Perú</p>
      </div>
      <div className='footer-contact'>
        <h3>mauriciocontrerasr@outlook.com</h3>
        <h4>955 063 493</h4>
      </div>
      <div className='footer-sns'>
        <div className='design-by'>
          Design By M.A.C.R.
        </div>
        <div className='sns-links'>
          <a href='https://github.com/MauricioC12' target='_blank' rel='noreferrer'>
            <i className='fab fa-github github'></i>
          </a>
          <a href='https://www.linkedin.com/in/mauricio-contreras-rivas-8a271a229/' target='_blank' rel='noreferrer'>
            <i className='fab fa-linkedin linkedin'></i>
          </a>
          <a href='https://twitter.com/Maurii1202' target='_blank' rel='noreferrer'>
            <i className='fab fa-twitter twitter'></i>
          </a>
          <a href='https://www.facebook.com/MauricioContreras1202/' target='_blank' rel='noreferrer'>
            <i className='fab fa-facebook facebook'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;