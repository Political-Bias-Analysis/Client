import React, { useEffect } from 'react'
import { useState } from 'react'

import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import CustomTitle from '../../components/CustomTitle/CustomTitle'
import DropDown from '../../components/DropDownSelection/DropDown'
import USChoropleth from '../../components/USChoropleth/USChoropleth'
import VerticalBar from '../../components/VerticalBar/VerticalBar'

import {fetchGeoData, fetchDataTotal} from './HelperAPI'


const Dashboard = () => {

  const [showYearDropDown, setYearShowDropDown] = useState(false)
  const [displayYear, setShowDisplayYear] = useState(2020)

  const [showOfficeDropDown, setOfficeDropDown] = useState(false)
  const [office, setOfficeValue] = useState("President")

  const [graphGeoData, setgraphGeoData] = useState([])
  const [totalVote, setTotalVote] = useState([])

  const electionTerms = ["President", "Senate", "House"]
  const elections = {
    pres: {
      queryTerm: "Pres",
      years: [2020, 2016, 2012]
    },
    senate: {
      queryTerm: "Senate",
      years: [2020, 2018, 2016, 2014, 2012, 2010]
    },
    house: {
      queryTerm: "House",
      years: [2020, 2018, 2016, 2014, 2012, 2010]
    }
  }
  
  useEffect(() => {
    fetchGeoData(displayYear, office, setgraphGeoData);
    fetchDataTotal(displayYear, setTotalVote);
  }, []);


  const getYearDisplayValue = () => {
    return displayYear;
  }

  const getYearDropDownValue = () => {
    return showYearDropDown;
  }

  const getOfficeTerm = () => {
    return office;
  }

  const getOfficeDropDown = () => {
    return showOfficeDropDown;
  }
  console.log(graphGeoData)
  return (
    <div>
      <Navbar />
      <CustomTitle title="Dashboard" />
      <div className='page-container'>
        <div className='button-container'>
          <DropDown 
            items={electionTerms}
            getShowDropDown={getOfficeDropDown}
            setDropDown={setOfficeDropDown}
            setDisplayValue={setOfficeValue}
            getDisplayValue={getOfficeTerm}/>
          <DropDown 
            items={
              office === 'President' ? elections.pres.years : 
              office === 'Senate' ? elections.senate.years :
              elections.house.years
            }
            getShowDropDown={getYearDropDownValue}
            setDropDown={setYearShowDropDown}
            setDisplayValue={setShowDisplayYear}
            getDisplayValue={getYearDisplayValue}/>
          <button 
            onClick={() => {
              fetchGeoData(displayYear, office, setgraphGeoData);
            }}
          >
            Submit
          </button>
        </div>
        <div className='map-holder'>
          <USChoropleth data={graphGeoData}/>
        </div>
        <div>
          <VerticalBar data={totalVote} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard