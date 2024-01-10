import React from 'react'
import '../App.css';

//Make this contact us dynamic also the image dynamic depending on the page, chat gpt has sown how to do it correctly

const Info = ({name}) => {
  return (
    <div className='info'>
        <h1 className='info-h'>{name}</h1>
    </div>
  )
}

export default Info
