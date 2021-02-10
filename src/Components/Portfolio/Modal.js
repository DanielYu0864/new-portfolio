import React from 'react';
import Image from './Image';
function Modal(props) {
  const {title, category, language, image, repo, deploy} = props.project;

  return (
    <div className='project-container'>
      <h2>{title}</h2>
      <div className='category'>Outline: <p>{category}</p></div>
      <div className='language'>Language: <p>{language}</p></div>
      <div className='a-tags'>
        <a className='link underline1' target='_blank' href={repo}>Repository</a>
        <a className='link underline2' target='_blank' href={deploy ? deploy : repo}>Deploy</a>
      </div>

      {/* <Image
        url={image}
      /> */}
    </div>
  )


}

export default Modal
