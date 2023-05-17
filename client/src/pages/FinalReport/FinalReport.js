import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import CustomTitle from '../../components/CustomTitle/CustomTitle'
import { report } from './reportDoc'
import './FinalReport.css'

const FinalReport = () => {
  return (
    <div>
      <Navbar />
      <CustomTitle title={"Project Report"}/>
      <div className='text-container'>
        <h2>Project Introduction</h2>
        <p>{report.introduction1}</p>
        <br/>
        <p>{report.introduction2}</p>
        <h2>Datasets</h2>
        <h4>I. Articles Dataset</h4>
        <p>{report.dataset1}</p>
      </div>
    </div>
  )
}

export default FinalReport