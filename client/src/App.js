import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import Models from './pages/Models/Models';
import FinalReport from './pages/FinalReport/FinalReport';

function App() {

  return (
    <Routes className="App">
      <Route path='/' element={<WelcomePage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/models' element={<Models/>} />
      <Route path='/report' element={<FinalReport/>} />
    </Routes>
  );
}

export default App;
