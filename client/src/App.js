import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import WelcomePage from './pages/WelcomePage/WelcomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import Presentation from './pages/Presentation/Presentation';
import FinalReport from './pages/FinalReport/FinalReport';

import {
  fetchGeoData, 
  fetchDataTotal, 
  fetchVoteRegisByYear,
  fetchArticleCountByYear,
  fetchAllArticleCount,
  fetchArticleCount,
  fetchArticleCountBySource
} from './controllers/HelperAPI'

import { 
  setgraphGeoData,
  setTotalVote,
  setVoteRegisData,
  setArticleCount,
  setAllArticleCount,
  setAllArticleCountBySource,
  setTotalArticleCount
} from './store/slices/DataSlice';

const App = () => {

  const selection = useSelector((state) => state.Selection)
  const dispatch = useDispatch();

  useEffect( () => {
    const fetchAndSetGeo = async () => {
      const data = await fetchGeoData(selection.displayYear, selection.office);
      dispatch(setgraphGeoData(data));
    };

    const fetchAndSetDataTotal = async () => {
      const data = await fetchDataTotal(selection.allYearsOffice);
      dispatch(setTotalVote(data));
    };

    const fetchAndSetRegisByYear = async () => {
      const data = await fetchVoteRegisByYear(selection.displayYear);
      dispatch(setVoteRegisData(data));
    };

    const fetchAndSetArticleCountByYear = async () => {
      const data = await fetchArticleCountByYear(selection.displayYear);
      dispatch(setArticleCount(data));
    };

    const fetchAndSetAllArticleCount = async () => {
      const data = await fetchAllArticleCount();
      dispatch(setAllArticleCount(data));
    };

    const fetchAndSetArticleCountBySource = async () => {
      const data = await fetchArticleCountBySource();
      dispatch(setAllArticleCountBySource(data));
    }

    const fetchAndSetArticleCount = async () => {
      const data = await fetchArticleCount();
      dispatch(setTotalArticleCount(data));
    }
    
    fetchAndSetGeo();
    fetchAndSetDataTotal();
    fetchAndSetRegisByYear();
    fetchAndSetArticleCountByYear();
    fetchAndSetAllArticleCount();
    fetchAndSetArticleCountBySource();
    fetchAndSetArticleCount();
  }, []);

  return (
    <Routes className="App">
      <Route path='/' element={<WelcomePage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/presentation' element={<Presentation/>} />
      <Route path='/report' element={<FinalReport/>} />
    </Routes>
  );
}

export default App;
