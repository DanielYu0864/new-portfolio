import React from 'react';
import Nav from '../Nav';
import './style.css'
function Header() {
  return (
    <div className='main-contaner' id='main-contaner'>
      <Nav/>
      <div className="title">
        <h1>
          I am Daniel A. Yu
        </h1>
        <p>
          A lifelong learner of knowledge who presently has sight set on a full-stack developer position.
        </p>
      </div>
      <br/>
      <div className="media">
        <a title='Linkedin' target='blank' href="https://www.linkedin.com/in/daniel-yu-264360199/"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt=''/></a>
        <a title='Github' target='blank' href="https://github.com/DanielYu0864"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt=''/></a>
      </div>
    </div>
  )
}

export default Header;
