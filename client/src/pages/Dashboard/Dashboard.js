import React, { useEffect } from 'react'
import { useState } from 'react'

import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import CustomTitle from '../../components/CustomTitle/CustomTitle'
import DropDown from '../../components/DropDownSelection/DropDown'
import USChoropleth from '../../components/USChoropleth/USChoropleth'
import VerticalBar from '../../components/VerticalBar/VerticalBar'
import Axios from '../../controllers/axios'


const Dashboard = () => {

  const [showYearDropDown, setYearShowDropDown] = useState(false)
  const [displayYear, setShowDisplayYear] = useState(2020)

  const [showOfficeDropDown, setOfficeDropDown] = useState(false)
  const [office, setOfficeValue] = useState("President")

  const [graphDataPres, setgraphDataPres] = useState([])
  const [graphDataSenate, setgraphDataSenate] = useState([])
  const [graphDataHouse, setgraphDataHouse] = useState([])
  
  const [presidentTotalVote, setPresidentTotalVote] = useState([])

  const electionTerms = ["President", "Senate", "House"]
  const elections = {
    pres: {
      queryTerm: "Pres",
      years: [2012, 2016, 2020]
    },
    senate: {
      queryTerm: "Senate",
      years: [2010, 2012, 2014, 2016, 2018, 2020]
    },
    house: {
      queryTerm: "House",
      years: [2010, 2012, 2014, 2016, 2018, 2020]
    }
  }
  
  useEffect(() => {
    const fetchPresData = async() => {
      try {
        Axios.get(`/${displayYear}/${elections.pres.queryTerm}/max`)
        .then((response) => setgraphDataPres(response.data));
        setgraphDataSenate([]);
        setgraphDataHouse([]);
      } catch (error) {
        console.log("Failed to retrive Data: Presitental Elections:", error)
      } 
    }

    const fetchPresDataTotal = async() => {
      try {
        Axios.get(`/${displayYear}/${elections.pres.queryTerm}/total-state-year`)
        .then((response) => setPresidentTotalVote(response.data));
        // setgraphDataSenate([]);
        // setgraphDataHouse([]);
      } catch (error) {
        console.log("Failed to retrive Data: Presitental Elections:", error);
      } 
    }

    const fetchSenateData = async() => {
      try {
        Axios.get(`/${displayYear}/${elections.senate.queryTerm}/max`)
        .then((response) => setgraphDataSenate(response.data));
        setgraphDataHouse([]);
        setgraphDataPres([]);
      } catch (error) {
        console.log("Failed to retrive Data: Senate Elections")
      } 
    }

    const fetchHouseData = async() => {
      try {
        Axios.get(`/${displayYear}/${elections.house.queryTerm}/max`)
          .then((response) => setgraphDataHouse(response.data));
          setgraphDataSenate([]);
          setgraphDataPres([]);
      } catch (error) {
        console.log("Failed to retrive Data: House Elections");
      } 
    }
    if (office === 'President') {
      fetchPresData();
      fetchPresDataTotal();
    }
    else if (office === 'Senate')
      fetchSenateData();
    else
      fetchHouseData();
  }, [displayYear, office])


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
        </div>
        <div className='map-holder'>
          <USChoropleth data={
            office === 'President' ? graphDataPres :
            office === 'Senate' ? graphDataSenate :
            graphDataHouse
            }/>
        </div>
        <div>
          <VerticalBar data={presidentTotalVote} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard