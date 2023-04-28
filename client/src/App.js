import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import FinalReport from './pages/FinalReport/FinalReport';

function App() {
  return (
    <Routes className="App">
      <Route path='/' element={<WelcomePage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/report' element={<FinalReport/>} />
    </Routes>
  );
}

export default App;
