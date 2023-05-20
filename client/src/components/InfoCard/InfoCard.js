import React from 'react'
import { Card,Paper } from '@mui/material'

import './InfoCard.css'

export const InfoCardCount = ({title, data}) => {

  return (
    <Paper className='info-card-container' elevation={8}>
      <Card className='card-container'>
        <p className='title-card'>{title}</p>
        <p>Total Articles Scraped</p>
        <p className='number-count'>{data.count}</p>
      </Card>
    </Paper>
  )
}

export const InfoCardSource = ({title, data}) => {
  return (
    <Paper className='info-card-container' elevation={8}>
    <Card className='card-container'>
      <p className='title-card'>{title}</p>
      {data.map(item => <p className='info'>{item.source}: {item.count}</p>)}
    </Card>
  </Paper>
  )
}