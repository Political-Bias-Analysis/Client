import React from 'react'
import { Paper,Card } from '@mui/material'

import './introduction.css'
import Election from '../../assets/images/election.png'
import CNNLogo from '../../assets/images/cnn-logo.jpeg'
import CBSLogo from '../../assets/images/CBS_logo.png'
import FOXLogo from '../../assets/images/fox-news-logo.png'
import NPRLogo from '../../assets/images/npr-logo.png'
import TwitterLogo from '../../assets/images/twitter-logo.jpeg'

const TitlePage = () => {
  return (
    <Paper className='title-box' elevation={6}>
      <Card>
        <h1 className='intro-title' >
          How Much Does Bias in the Media Affect Election Outcomes? 
        </h1>
        <h3 className='author-text'>
          By: Tram La, Lucy Lu, Nancy Carlson, Deborah Rosa Franza, Vaishnavi Ravinutala
        </h3>
      </Card>
      <Card className='images-holder' elevation={12}>
        <img src={Election} alt="picture of votes being turned in" className='election-img'/>
        <Card className='icon-holder'>
          <img src={TwitterLogo} alt="Twitter logo" className='icon-logo'/>
          <img src={CNNLogo} alt="CNN logo" className='icon-logo'/>
          <img src={CBSLogo} alt="CBS logo" className='icon-logo'/>
          <img src={FOXLogo} alt="Fox news logo" className='icon-logo'/>
          <img src={NPRLogo} alt="NPR logo" className='icon-logo'/>
        </Card>
      </Card>
    </Paper>
  )
}

export default TitlePage