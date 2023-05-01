import React from 'react'
import { useState } from 'react'

import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import CustomTitle from '../../components/CustomTitle/CustomTitle'
import DropDown from '../../components/DropDownSelection/DropDown'

const Dashboard = () => {

  const [showDropDown, setShowDropDown] = useState(false)
  const [displayYear, setShowDisplayYear] = useState("Select Year")
  console.log(displayYear)
  const years = [];
  for(var i = 2010; i <= 2020; ++i){
    years.push(i);
  }

  const getDisplayValue = () => {
    return displayYear
  }

  const getDropDownValue = () => {
    return showDropDown
  }
  return (
    <div>
      <Navbar />
      <CustomTitle title="Dashboard" />
      <div className='page-container'>
        <DropDown 
          items={years}
          getShowDropDown={getDropDownValue}
          setDropDown={setShowDropDown}
          setDisplayValue={setShowDisplayYear}
          getDisplayValue={getDisplayValue}/>
        <div >
          Graphs
        </div>
      </div>
    </div>
  )
}

export default Dashboard