import React from 'react'
import { Paper } from '@mui/material'
import './Legend.css'

export const ChoroplethLegendDem = () => {
  return (
    <Paper className='legend' style={{marginBottom:"1.5rem"}}>
        <p> Democratic Party </p>
        <div className='inner-box'>
            <button style={{backgroundColor:"#0088A3", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
            <p className='text'>{'>'}60%</p>
        </div>
        <div className='inner-box'>
            <button style={{backgroundColor:"#00BBE0", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
            <p className='text'>50%-60%</p>
        </div>
        <div className='inner-box'>
            <button style={{backgroundColor:"#00AACC", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
            <p className='text'>40%-50%</p>
        </div>
        <div className='inner-box'>
            <button style={{backgroundColor:"#0AD6FF", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
            <p className='text'>30%-40%</p>
        </div>
        <div className='inner-box'>
            <button style={{backgroundColor:"#5CE4FF", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
            <p className='text'>20%-30%</p>
        </div>
        <div className='inner-box'>
            <button style={{backgroundColor:"#99EEFF", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
            <p className='text'>0-20%</p>
        </div>
    </Paper>
  )
}

export const ChoroplethLegendRep = () => {
    return (
      <Paper className='legend' >
          <p> Republican Party </p>
          <div className='inner-box'>
              <button style={{backgroundColor:'#9B2226', padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>{'>'}60%</p>
          </div>
          <div className='inner-box'>
              <button style={{backgroundColor:'#C92C31', padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>50%-60%</p>
          </div>
          <div className='inner-box'>
              <button style={{backgroundColor:'#D7474C', padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>40%-50%</p>
          </div>
          <div className='inner-box'>
              <button style={{backgroundColor:'#DE686C', padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>30%-40%</p>
          </div>
          <div className='inner-box'>
              <button style={{backgroundColor:'#E58A8D', padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>20%-30%</p>
          </div>
          <div className='inner-box'>
              <button style={{backgroundColor:'#ECACAE', padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>0-20%</p>
          </div>
      </Paper>
    )
  }

  
  export const ChoroplethLegendInd = () => {
    return (
      <Paper className='legend'>
          <p> Independent Party </p>
          <div className='inner-box'>
              <button style={{backgroundColor:"#0088A3", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>{'>'}60%</p>
          </div>
          <div className='inner-box'>
              <button style={{backgroundColor:"#00BBE0", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>50%-60%</p>
          </div>
          <div className='inner-box'>
              <button style={{backgroundColor:"#00AACC", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>40%-50%</p>
          </div>
          <div className='inner-box'>
              <button style={{backgroundColor:"#0AD6FF", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>30%-40%</p>
          </div>
          <div className='inner-box'>
              <button style={{backgroundColor:"#5CE4FF", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>20%-30%</p>
          </div>
          <div className='inner-box'>
              <button style={{backgroundColor:"#99EEFF", padding:"4px", margin:"5px 5px 0px 5px"}}></button>
              <p className='text'>0-20%</p>
          </div>
      </Paper>
    )
  }
  
