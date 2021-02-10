import React, { useState, useEffect } from 'react'
import './style.css';
import { projects } from './protfolio.json';
import Image from './Image';
import Modal from './Modal';
function Portfolio() {
  const [project, setProject] = useState('');
  const [projectChosen, setProjectChosen] = useState(false);
  const [projectDataList, setProjectDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleProjectChoose = (projectId) => {
    let projectArr = projectDataList.filter( p => {
      return p.id === projectId;
    });
    if(projectId == project.id) {
      setProject('');
      setProjectChosen(false);
    } else {
      setProject(projectArr[0]);
      setProjectChosen(true);
    }
    // console.log(projectArr[0]);

  }

  const dataLoading = () => {
    let data = projects;
    setProjectDataList(data);
    setLoading(false);
  }

  useEffect(() => {
    dataLoading();
  },[])

  useEffect(() => {

  }, [projectChosen])

  if(projectChosen) {
    return (
    <div className='portfolio' id='portfolio'>
      <h2>Portfolio</h2>

      <div className='projects top' >
        {
          projectDataList.map(e => (
            <div className='project-card' key={e.id}>
            <Image
                url={e.image}
            />
            <a onClick={() => handleProjectChoose(e.id)}>
              <div className={e.title === project.title ? 'hover none' :'hover'}>
                <h2>#{e.title}</h2>
              </div>
            </a>
            </div>
          ))
        }
      </div>

      <Modal
        project={project}
      />

    </div>);
  }

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='portfolio' id='portfolio'>
      <h2>Portfolio</h2>
      <div className='projects' >
        {
          projectDataList.map(e => (
            <div className='project-card' key={e.id}>
            <Image
                url={e.image}
            />
            <a onClick={() => handleProjectChoose(e.id)}>
              <div className='hover'>
                <h2>#{e.title}</h2>
              </div>
            </a>
            {/* <a target='blank' href={e.deploy !== '' ? e.deploy : e.repo} onClick={handleProjectChoose(e.id)}>
              <div className='hover'>
                <h2>#{e.title}</h2>
              </div>
            </a> */}
            </div>
          ))
        }
        {/* <div className='project-card'>
          <Image
              url={projectDataList[0].image}
          />
          <a target='blank' href='https://github.com/DanielYu0864/DanielYu-HomeWork-12-Employee-Management-System'>
            <div className='hover'>
              <h2>#{projectDataList[0].title}</h2>
            </div>
          </a>
        </div>
        <div className='project-card'>
          <Image
              url={projectDataList[1].image}
            />
          <a target='blank' href='https://project03familyapp.herokuapp.com/'>
            <div className='hover'>
                <h2>#{projectDataList[1].title}</h2>
            </div>
          </a>
        </div>
        <div className='project-card'>
          <Image
            url={projectDataList[2].image}
          />
          <a target='blank' href='https://sk8fndr.herokuapp.com/'>
            <div className='hover'>
                <h2>#{projectDataList[2].title}</h2>
            </div>
          </a>
        </div>
        <div className='project-card'>
          <Image
            url={projectDataList[3].image}
          />
          <a target='blank' href='https://danielyu0864.github.io/DanielYu-HomeWork-06-Weather-Dashboard/'>
            <div className='hover'>
                <h2>#{projectDataList[3].title}</h2>
            </div>
          </a>
        </div> */}
      </div>
    </div>

  )
}

export default Portfolio
