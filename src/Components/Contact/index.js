import React from 'react';
import './style.css';
function Contact() {
  return (
    <div className='contact' id='contact'>
    <div className="line"></div>
      <ul>
        Contact Me:
        <p>Phone: <a href="tel:+14256254073">425-625-4073</a></p>
        <p>Email: <a href="mailto:adam741963@gmail.com">adam741963@gmail.com</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/daniel-yu-264360199/">Daniel Yu</a></p>
        <p>Github: <a href="https://github.com/DanielYu0864">DanielYu0864</a></p>
        <p>Resume: <a href="https://docs.google.com/document/d/16Y8jTLcpXA2tg8TWbc2ODfmxt7hLBfrARfK02jQfFok/edit?usp=sharing">Google docs</a></p>
      </ul>
    <div className="line"></div>

    </div>
  )
}

export default Contact
