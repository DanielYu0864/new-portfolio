import React from 'react'
import './style.css';
import Image from './Image';
function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h2>Portfolio</h2>
      <div className='projects' >
        <a href='https://github.com/DanielYu0864/DanielYu-HomeWork-12-Employee-Management-System'>
          <Image
            url={'https://user-images.githubusercontent.com/66336525/105122353-e5a95a80-5a8a-11eb-8343-967e6920d521.png'}
          />
        </a>
        <a href='https://project03familyapp.herokuapp.com/'>
          <Image
            url={'https://user-images.githubusercontent.com/66336525/105122362-e9d57800-5a8a-11eb-9385-c4cb68e8bf28.png'}
          />
        </a>
        <a href='https://sk8fndr.herokuapp.com/'>
          <Image
            url={'https://user-images.githubusercontent.com/66336525/105122364-ec37d200-5a8a-11eb-8564-8c9daa13747c.jpg'}
          />
        </a>
        <a href='https://danielyu0864.github.io/DanielYu-HomeWork-06-Weather-Dashboard/'>
          <Image
            url={'https://user-images.githubusercontent.com/66336525/105122371-efcb5900-5a8a-11eb-9cbb-01313d9d3168.png'}
          />
        </a>
      </div>
    </div>

  )
}

export default Portfolio
