import React from 'react';
import './NavBar.css';

function NavBar({ isScrolling }) {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className='navbar-logo' onClick={toTheTop}>
        <a href='#home'>Home</a>
        <a href='#aboutme'>About Me</a>
        <a href='#projects'>Projects</a>
        <a href='#phrase'>Phrase</a>
        <a href='#contact'>Contact Me</a>
      </div>
    </nav>
  )
}

export default NavBar; 