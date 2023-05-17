import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


import Navbar from '../../components/Navbar/Navbar';
import CustomTitle from '../../components/CustomTitle/CustomTitle';
import StackedArea from '../../components/StackedArea/StackedArea';
import { report } from './reportDoc';
import { articleHeaders, articleRows } from './TableColumns';
import './FinalReport.css';

const FinalReport = () => {
  const dataStore = useSelector((state) => state.DataInfo);

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
        <Box m="auto" sx={{ flexDirection: 'column'}} className="stacked-area">
          <StackedArea data={dataStore.allArticleCount}/>
          <p className='caption-text'>
            Figure 1. Stacked area graph that displays the total number of articles scraped by biased term and year
          </p>
        </Box>
        <p>{report.dataset2}</p>
        <Box m="auto" sx={{ flexDirection: 'column'}} className='table-article'>
          <DataGrid
          rows={articleRows}
          columns={articleHeaders}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          />
          <p className='caption-text'>
            Figure 1. Stacked area graph that displays the total number of articles scraped by biased term and year
          </p>
        </Box>
        <p>{report.dataset3}<a href="https://github.com/Political-Bias-Analysis/Data/tree/main/data/links">Github repository</a>.</p>
        <h4>II. Twitter Dataset</h4>
      </div>
    </div>
  )
}

export default FinalReport