import React from 'react';
import Nav from '../Nav';
import './style.css'
function Header() {
  return (
    <div className='main-contaner'>
      <Nav/>
      <div class="title">
        <h1>
          I am Daniel A. Yu
        </h1>
        <p>
          A lifelong learner of knowledge who presently has sight set on a fullstacck-developer position.
        </p>
      </div>
      <br/>
      <div class="media">
        <a title='Linkedin' href="https://www.linkedin.com/in/daniel-yu-264360199/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"/></a>
        <a title='Github' href="https://github.com/DanielYu0864" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png"/></a>
      </div>
    </div>
  )
}

export default Header;
