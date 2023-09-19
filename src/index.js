import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './responsive.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Contact from './pages/Contact';
import AreaUnderDrought from './pages/AreaUnderDrought';
import DroughtEarlyWarningSystem from './pages/DroughtEarlyWarningSystem';
import DroughtTimeSeries from './pages/DroughtTimeSeries';
import Disclaimer from './pages/Disclaimer';
import Acknowledgement from './pages/Acknowledgement';
import DroughtForecast from './pages/DroughtForecast';
import DroughtOutlook from './pages/DroughtOutlook';
import DroughtReporting from './pages/DroughtReporting';
import StreamflowMonitor7d from './pages/StreamflowMonitor7d';
import StreamflowMonitor30d from './pages/StreamflowMonitor30d';
import StandardizedPrecipitationIndex from './pages/StandardizedPrecipitationIndex';
import StandardizedRunoffIndex from './pages/StandardizedRunoffIndex';
import StandardizedSoilMoistureIndex from './pages/StandardizedSoilMoistureIndex';
import NavBar from './components/NavBar';
// import DroughtNews from './pages/DroughtNews';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<AreaUnderDrought />} />
      <Route path="/drought-early-warning-system" element={<DroughtEarlyWarningSystem />} />
      <Route path="/drought-time-series" element={<DroughtTimeSeries />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/acknowledgement" element={<Acknowledgement />} />
      <Route path="/drought-forecast" element={<DroughtForecast />} />
      <Route path="/drought-outlook" element={<DroughtOutlook />} />
      <Route path="/drought-reporting" element={<DroughtReporting />} />
      <Route path="/7d-streamflow-monitor" element={<StreamflowMonitor7d />} />
      <Route path="/30d-streamflow-monitor" element={<StreamflowMonitor30d />} />
      <Route path="/standardized-precipitation-index" element={<StandardizedPrecipitationIndex />} />
      <Route path="/standardized-runoff-index" element={<StandardizedRunoffIndex />} />
      <Route path="/standardized-soil-moisture-index" element={<StandardizedSoilMoistureIndex />} />
      {/* <Route path="/drought-news" element={<DroughtNews/>} /> */}
    
    </Routes>
    <Footer />
  </Router>,


  


);

