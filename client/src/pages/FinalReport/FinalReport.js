import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


import Navbar from '../../components/Navbar/Navbar';
import CustomTitle from '../../components/CustomTitle/CustomTitle';
import StackedArea from '../../components/StackedArea/StackedArea';
import SoftwareTable from './SoftwareTable';
import { report } from './reportDoc';
import { 
  articleHeaders, 
  articleRows,
  electionHeaders,
  electionRows,
  twitterHeaders,
  twitterRows,
  votersHeaders,
  votersRows,
 } from './TableColumns';
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
            Figure 2. Examples of Article Data from 2016 to 2020
          </p>
        </Box>
        <p>{report.dataset3}
          <a 
            target='_blank' rel="noreferrer noopener"
            href="https://github.com/Political-Bias-Analysis/Data/tree/main/data/links">
              Github repository
            </a>.
          </p>
        <h4>II. Twitter Dataset</h4>
          <Box m="auto" sx={{ flexDirection: 'column'}} className='table-article'>
            <DataGrid
            rows={twitterRows}
            columns={twitterHeaders}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            />
            <p className='caption-text'>
              Figure 3. Example data from twitter dataset. ('-' represents data that we cannot share to the public)
            </p>
          </Box>
        <h4>III. Election Dataset</h4>
        <p>{report.dataset6}</p>
        <p>
          {report.dataset7}
          <a 
            target='_blank' rel="noreferrer noopener"
            href="https://www.fec.gov/introduction-campaign-finance/election-and-voting-information/">“Federal Election Commission”</a>
          , {report.dataset8}
        </p>
        <Box m="auto" sx={{ flexDirection: 'column'}} className='table-election'>
          <DataGrid
          rows={electionRows}
          columns={electionHeaders}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          />
          <p className='caption-text'>
            Figure 4. Election Results from 2020 to 2010. (5237 rows by 7 columns)
          </p>
        </Box>
        <br/>
        <p>
          {report.dataset9}
          <a target='_blank' rel="noreferrer noopener"
            href="https://www.census.gov/topics/public-sector/voting/data/tables.2010.List_1863097513.html#list-tab-List_1863097513">
            “United States Census Bureau”
          </a>
          {report.dataset10}
        </p>
        <p>{report.dataset11}</p>
        <Box m="auto" sx={{ flexDirection: 'column'}} className='table-voters'>
          <DataGrid
          rows={votersRows}
          columns={votersHeaders}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          />
          <p className='caption-text'>
            Figure 5. Voter census data from 2020 to 2010. Values in the thousands (260 rows by 7 columns)
          </p>
        </Box>
        <p>{report.dataset12}</p>
        <h2>Software</h2>
        <Box>
          <SoftwareTable/>
        </Box>
      </div>
    </div>
  )
}

export default FinalReport