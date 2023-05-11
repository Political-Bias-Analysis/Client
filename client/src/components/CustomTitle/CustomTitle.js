import React from 'react'

import './CustomTitle.css'

const CustomTitle = ({title}) => {
  return (
    <div className='title-container'>
        <h1 className='header-text'>
            How Much Does Bias in Media Influence Election Outcomes?
        </h1>
        <h2 className='title-text'>
            {title}
        </h2>
    </div>
  )
}

export default CustomTitle