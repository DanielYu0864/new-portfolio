import React from 'react'
import img from './IMG_20190620_093845_094.jpg'
function AboutMe() {
  return (
    <div class="about-me-container .col-10" id="about-me-container">
        <div class="my-p">
          <img class="mypicture" src={img}/>
        </div>

                <p>
                  I am Daniel Yu from Taiwan
                </p>
                <p>
                  Finished the ABE program at Bellevue college in 2020
                </p>
                <p>
                  Studying to be a full stack web developer in UW Coding BootCamp
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
