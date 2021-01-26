import React from 'react'
import img from './IMG_20190620_093845_094.jpg';
import './style.css';
function AboutMe() {
  return (
    <div className="about-me-container .col-10" id="about-me-container">
        <div className="my-p">
          <img className="mypicture" src={img} alt=''/>
        </div>

                <p>
                  I am Daniel Yu from Taiwan
                </p>
                <p>
                  Completed the Advanced Basic English program at Bellevue College
                </p>
                <p>
                  Graduated{/* or finished? */} the Full-Stack Web Development Certificate from the University of Washington
                </p>
                <p>
                  love in swimming but haven't swum once since came here
                </p>
                <p>
                  love cooking but only know how to cook Taiwanese food
                </p>
    </div>
  )
}

export default AboutMe;
