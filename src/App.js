import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Contact from './pages/Contact';
import AreaUnderDrought from './pages/AreaUnderDrought';
import Disclaimer from './pages/Disclaimer';
import Acknowledgement from './pages/Acknowledgement';
import DroughtReporting from './pages/DroughtReporting';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

// import DroughtEarlyWarningSystem from './pages/DroughtEarlyWarningSystem';
// import DroughtTimeSeries from './pages/DroughtTimeSeries';
// import DroughtForecast from './pages/DroughtForecast';
// import DroughtOutlook from './pages/DroughtOutlook';
// import StreamflowMonitor7d from './pages/StreamflowMonitor7d';
// import StreamflowMonitor30d from './pages/StreamflowMonitor30d';
// import StandardizedPrecipitationIndex from './pages/StandardizedPrecipitationIndex';
// import StandardizedRunoffIndex from './pages/StandardizedRunoffIndex';
// import StandardizedSoilMoistureIndex from './pages/StandardizedSoilMoistureIndex';

const DroughtEarlyWarningSystem = lazy(() => import('./pages/DroughtEarlyWarningSystem'));
const DroughtTimeSeries = lazy(() => import('./pages/DroughtTimeSeries'));
const DroughtForecast = lazy(() => import('./pages/DroughtForecast'));
const DroughtOutlook = lazy(() => import('./pages/DroughtOutlook'));
const StreamflowMonitor7d = lazy(() => import('./pages/StreamflowMonitor7d'));
const StreamflowMonitor30d = lazy(() => import('./pages/StreamflowMonitor30d'));
const StandardizedPrecipitationIndex = lazy(() => import('./pages/StandardizedPrecipitationIndex'));
const StandardizedRunoffIndex = lazy(() => import('./pages/StandardizedRunoffIndex'));
const StandardizedSoilMoistureIndex = lazy(() => import('./pages/StandardizedSoilMoistureIndex'));

const App = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Suspense fallback={<Preloader />}>
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
                    <ScrollToTop />
                </Suspense>

                <Footer />
            </Router>
        </>
    )
}

export default App