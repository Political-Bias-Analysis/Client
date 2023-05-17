import React from 'react'

import './CustomTitle.css'

const CustomTitle = ({title}) => {
  return (
    <div className='title-container'>
      <h1 className='header-text'>
        How Much Does Bias in Media Influence Election Outcomes?
      </h1>
      <h1 className='title-text'>
        {title}
      </h1>
      <h3>
        Published by: Tram La, Lucy Lu, Nancy Carlson, Deborah Rosa Franza, Vaishnavi Ravinutala 
      </h3>
    </div>
  )
}

export default CustomTitle