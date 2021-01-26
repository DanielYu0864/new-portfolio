import React from 'react'
import './style.css';
import Image from './Image';
function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h2>Portfolio</h2>
      <div className='projects' >
        <div className='project-card'>
          <Image
              url={'https://user-images.githubusercontent.com/66336525/105122353-e5a95a80-5a8a-11eb-8343-967e6920d521.png'}
          />
          <a target='blank' href='https://github.com/DanielYu0864/DanielYu-HomeWork-12-Employee-Management-System'>
            <div className='hover'>
              <h2>#Employee-Management-System</h2>
            </div>
          </a>
        </div>
        <div className='project-card'>
          <Image
              url={'https://user-images.githubusercontent.com/66336525/105122362-e9d57800-5a8a-11eb-9385-c4cb68e8bf28.png'}
            />
          <a target='blank' href='https://project03familyapp.herokuapp.com/'>
            <div className='hover'>
                <h2>#Family-App</h2>
            </div>
          </a>
        </div>
        <div className='project-card'>
          <Image
            url={'https://user-images.githubusercontent.com/66336525/105122364-ec37d200-5a8a-11eb-8564-8c9daa13747c.jpg'}
          />
          <a target='blank' href='https://sk8fndr.herokuapp.com/'>
            <div className='hover'>
                <h2>#sk8fndr</h2>
            </div>
          </a>
        </div>
        <div className='project-card'>
          <Image
            url={'https://user-images.githubusercontent.com/66336525/105122371-efcb5900-5a8a-11eb-9cbb-01313d9d3168.png'}
          />
          <a target='blank' href='https://danielyu0864.github.io/DanielYu-HomeWork-06-Weather-Dashboard/'>
            <div className='hover'>
                <h2>#Weather-App</h2>
            </div>
          </a>
        </div>
      </div>
    </div>

  )
}

export default Portfolio
