import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {
  Box, 
  Tab, 
  Tabs,
  Button,
  createTheme, 
  ThemeProvider 
} from '@mui/material'
import MainPage from '../../components/Introduction/MainPage'

const Presentation = () => {

  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div>
      <Navbar />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={currentTab} 
          onChange={(e, tabIndex) => setCurrentTab(tabIndex)} 
          aria-label="basic tabs example"
        >
        <Tab label="Introduction"/>
        <Tab label="Data Description and Management"/>
        <Tab label="Stat/ML Methods"/>
        <Tab label="Conclusion"/>
        </Tabs>
      </Box>
      {currentTab === 0 && 
        <MainPage/>
      }
    </div>
  )
}

export default Presentation