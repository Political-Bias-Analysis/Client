import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  Box, 
  Tab, 
  Tabs,
  Button,
  createTheme, 
  ThemeProvider 
} from '@mui/material'

import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import CustomTitle from '../../components/CustomTitle/CustomTitle'
import DropDown from '../../components/DropDownSelection/DropDown'
import USChoropleth from '../../components/USChoropleth/USChoropleth'
import BarGraph from '../../components/BarGraph/BarGraph'
import BarGraphCount from '../../components/BarGraph/BarGraphCount'
import DotPlot from '../../components/DotPlot/DotPlot'


import {
  fetchGeoData, 
  fetchDataTotal, 
  fetchVoteRegisByYear,
  fetchArticleCountByYear
} from './HelperAPI'


const Dashboard = () => {

  const [currentTab, setCurrentTab] = useState(0)

  const [displayYear, setShowDisplayYear] = useState(2020)
  const [office, setOfficeValue] = useState("President")
  const [allYearsOffice, setAllYearsOffice] = useState("President")

  const [graphGeoData, setgraphGeoData] = useState([])
  const [totalVote, setTotalVote] = useState([])
  const [voteRegisData, setVoteRegisData] = useState([])
  const [articleCount, setArticleCount] = useState([])

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
  }, []);

  useEffect(() => {
    fetchVoteRegisByYear(displayYear, setVoteRegisData);
    fetchArticleCountByYear(displayYear, setArticleCount);
  }, [displayYear])

  useEffect(() => {
    fetchDataTotal(allYearsOffice, setTotalVote);
  }, [allYearsOffice])

  const getOffice = () => {
    return office;
  };

  const getAllYearsOfficeValue = () => {
    return allYearsOffice;
  }

  const getYearDisplayValue = () => {
    return displayYear;
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#64748B',
        contrastText: '#ffffff',
      },
    },
  });

  // console.log(voteRegisData)

  return (
    <div>
      <Navbar />
      {/* <CustomTitle title="Dashboard" /> */}
      <div className='page-container'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={currentTab} 
            onChange={(e, tabIndex) => setCurrentTab(tabIndex)} 
            aria-label="basic tabs example"
          >
          <Tab label="Data Analysis By Year"/>
          <Tab label="Time Series Analysis"/>
          </Tabs>
        </Box>
          {currentTab === 0 &&
            <div className='mock-container'>
              <div className='button-container'>
                <DropDown 
                  items={electionTerms}
                  dropdownID={"Election"}
                  setDisplayValue={setOfficeValue}
                  getDisplayValue={getOffice}
                />
                <DropDown 
                  items={
                    office === 'President' ? elections.pres.years
                    : office === 'Sentate' ? elections.senate.years
                    : elections.house.years
                  }
                  dropdownID={"Year"}
                  setDisplayValue={setShowDisplayYear}
                  getDisplayValue={getYearDisplayValue}
                />
                <div className='button-style-mui'>
                  <ThemeProvider theme={theme}>
                    <Button variant='outlined' color="neutral" onClick={() => {fetchGeoData(displayYear, office, setgraphGeoData)}}>
                      Display
                    </Button>
                  </ThemeProvider>
                </div>
              </div>
              <div className='map-holder'>
                <DotPlot data={voteRegisData}/>
                <USChoropleth data={graphGeoData}/>
                <BarGraphCount data={articleCount}/>
              </div>
            </div>
          }
          {
            currentTab === 1 && 
            <div className='mock-container'>
              <div className='button-container'>
                <DropDown 
                  items={electionTerms}
                  dropdownID={"Elections"}
                  setDisplayValue={setAllYearsOffice}
                  getDisplayValue={getAllYearsOfficeValue}
                />
              </div>
              <div className='map-holder'>
                <BarGraph data={totalVote} title={allYearsOffice}/>
              </div>
            </div>
          }
      </div>
    </div>
  )
}

export default Dashboard