import React from 'react'
import { Card,Paper } from '@mui/material'

import './InfoCard.css'

export const InfoCardCount = ({title, data}) => {

  return (
    <Paper className='info-card-container' elevation={8}>
      <Card className='card-container'>
        <h3>{title}</h3>
        <h4>Total Articles Scraped</h4>
        <h1 className='number-count'>{data.count}</h1>
      </Card>
    </Paper>
  )
}

export const InfoCardSource = ({title, data}) => {
  return (
    <Paper className='info-card-container' elevation={8}>
    <Card className='card-container'>
      <h3>{title}</h3>
      {data.map(item => <h4>{item.source}: {item.count}</h4>)}
    </Card>
  </Paper>
  )
}