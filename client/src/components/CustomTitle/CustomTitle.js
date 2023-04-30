import React from 'react'

import './CustomTitle.css'

const CustomTitle = ({title}) => {
  return (
    <div  className='container'>
        <h1 className='header-text'>
            How Much Does Bias in Media Influence Election Outcomes?
        </h1>
        <h1 className='title-text'>
            {title}
        </h1>
    </div>
  )
}

export default CustomTitle