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
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector, useDispatch } from 'react-redux'


import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import CustomTitle from '../../components/CustomTitle/CustomTitle'
import DropDown from '../../components/DropDownSelection/DropDown'
import USChoropleth from '../../components/USChoropleth/USChoropleth'
import BarGraph from '../../components/BarGraph/BarGraph'
import BarGraphCount from '../../components/BarGraph/BarGraphCount'
import DotPlot from '../../components/DotPlot/DotPlot';
import StackedArea from '../../components/StackedArea/StackedArea';
import {InfoCardCount, InfoCardSource} from '../../components/InfoCard/InfoCard';
import {
  ChoroplethLegendDem,
  ChoroplethLegendRep
} from '../../components/USChoropleth/ChoroplethLegend';

import {
  fetchGeoData, 
  fetchDataTotal, 
  fetchVoteRegisByYear,
  fetchArticleCountByYear,
} from '../../controllers/HelperAPI'

import { 
  setgraphGeoData,
  setTotalVote,
  setVoteRegisData,
  setArticleCount,
} from '../../store/slices/DataSlice';


const Dashboard = () => {

  const dispatch = useDispatch();
  const dataStore = useSelector((state) => state.DataInfo);
  const selection = useSelector((state) => state.Selection);

  const [currentTab, setCurrentTab] = useState(0)

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
    const fetchAndSetDataTotal = async () => {
      const data = await fetchDataTotal(selection.allYearsOffice);
      dispatch(setTotalVote(data));
    };
    fetchAndSetDataTotal();
    
  }, [selection.allYearsOffice])


  const onClickSelection = async () => {
    const dataGeo = await fetchGeoData(selection.displayYear, selection.office);
    const dataVote = await fetchVoteRegisByYear(selection.displayYear);
    const dataArticle = await fetchArticleCountByYear(selection.displayYear);
    dispatch(setgraphGeoData(dataGeo));
    dispatch(setVoteRegisData(dataVote));
    dispatch(setArticleCount(dataArticle));
  }

  const getOffice = () => {
    return selection.office;
  };

  const getAllYearsOfficeValue = () => {
    return selection.allYearsOffice;
  }

  const getYearDisplayValue = () => {
    return selection.displayYear;
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#64748B',
        contrastText: '#ffffff',
      },
    },
  });
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
                  getDisplayValue={getOffice}
                />
                <DropDown 
                  items={
                    selection.office === 'President' ? elections.pres.years
                    : selection.office === 'Sentate' ? elections.senate.years
                    : elections.house.years
                  }
                  dropdownID={"Year"}
                  getDisplayValue={getYearDisplayValue}
                />
                <div className='button-style-mui'>
                  <ThemeProvider theme={theme}>
                    <Button variant='outlined' color="neutral" 
                      onClick={onClickSelection}>
                      Display
                    </Button>
                  </ThemeProvider>
                </div>
              </div>
              <div className='map-holder'>
                  <Grid container spacing={1}>
                    <Grid item md={12} lg={5.5}>
                      <USChoropleth data={dataStore.graphGeoData}/>
                    </Grid>
                    <Grid item md={3} lg={2}>
                      <ChoroplethLegendDem/>
                      <ChoroplethLegendRep/>
                    </Grid>
                    <Grid item md={9} lg={4.5}>
                      <BarGraphCount data={dataStore.articleCount}/>
                    </Grid>
                    <Grid item md={12} lg={12}>
                      <DotPlot data={dataStore.voteRegisData}/>
                    </Grid>
                  </Grid>
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
                  getDisplayValue={getAllYearsOfficeValue}
                />
              </div>
              <div className='map-holder'>
                <Grid container spacing={1}>
                  <Grid md={12} lg={4}>
                    <BarGraph data={dataStore.totalVote} title={selection.allYearsOffice}/>
                  </Grid>
                  <Grid md={8} lg={5.5}>
                    <StackedArea data={dataStore.allArticleCount}/>
                  </Grid>
                  <Grid md={4} lg={2.5}>
                    <InfoCardCount title="Articles Count Summary" data={dataStore.totalArticleCount}/>
                    <InfoCardSource title="Articles Count By Source" data={dataStore.articleCountBySource} />
                  </Grid>
                </Grid>
              </div>
            </div>
          }
      </div>
    </div>
  )
}

export default Dashboard