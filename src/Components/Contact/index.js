import React from 'react';
import './style.css';
function Contact() {
  return (
    <div className='contact' id='contact'>
    <div className="line"></div>
      {/* <ul>
        Contact Me:
        <li>Phone: <a href="tel:+14256254073">425-625-4073</a></li>
        <li>Email: <a href="mailto:adam741963@gmail.com">adam741963@gmail.com</a></li>
        <li>Linkedin: <a target='blank' href="https://www.linkedin.com/in/daniel-yu-264360199/">Daniel Yu</a></li>
        <li>Github: <a target='blank' href="https://github.com/DanielYu0864">DanielYu0864</a></li>
        <li>Resume: <a target='blank' href="https://docs.google.com/document/d/1UuztsW4WQRWzihy84wIKtwEpPHqmhGGpWV4snOjjDj8/edit?usp=sharing">Google docs</a></li>
      </ul> */}

    <div className='info'>
      <ul>
        Contact Me:
        <li>Phone: <a href="tel:+14256254073">425-625-4073</a></li>
        <li>Email: <a href="mailto:adam741963@gmail.com">adam741963@gmail.com</a></li>
        <li>Linkedin: <a target='blank' href="https://www.linkedin.com/in/daniel-yu-264360199/">Daniel Yu</a></li>
        <li>Github: <a target='blank' href="https://github.com/DanielYu0864">DanielYu0864</a></li>
        <li>Resume: <a target='blank' href="https://docs.google.com/document/d/1UuztsW4WQRWzihy84wIKtwEpPHqmhGGpWV4snOjjDj8/edit?usp=sharing">Google docs</a></li>
      </ul>
    </div>

    <div className="line"></div>
    </div>
  )
}

export default Contact
