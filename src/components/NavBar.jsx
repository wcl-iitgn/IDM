import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="main-header">
                <h1>India Drought Monitor</h1>
            </div>
            <nav className="navbar">
                <div className="nav-container">

                    <div className="nav-logo">
                        India Drought Monitor
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                // className={({ isActive }) => (isActive ? 'active-nav' : 'nav-link')}
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Area Under Drought
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/drought-early-warning-system"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Drought Early Warning System
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/drought-time-series"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Drought Time Series
                            </NavLink>
                        </li>

                        <div className="nav-item">
                            <li className="">
                                <button className="nav-dropbtn"> Drought Forecast <i className="fa fa-caret-down" aria-hidden="true"></i></button>
                                <div className="dropdown-content">
                                    <NavLink
                                        to="/drought-forecast"
                                        activeClassName="active"
                                        className="drop-nav-links"
                                        onClick={handleClick}
                                    >
                                        Quantitative Drought Forecast
                                    </NavLink>
                                    <NavLink
                                        to="/drought-outlook"
                                        activeClassName="active"
                                        className="drop-nav-links"
                                        onClick={handleClick}
                                    >
                                        Drought Outlooks
                                    </NavLink>

                                </div>

                            </li>

                        </div>

                        <div className="nav-item">
                            <li className="">
                                <button className="nav-dropbtn">Streamflow Monitor <i className="fa fa-caret-down" aria-hidden="true"></i></button>
                                <div className="dropdown-content">
                                    <NavLink
                                        to="/7d-streamflow-monitor"
                                        activeClassName="active"
                                        className="drop-nav-links"
                                        onClick={handleClick}
                                    >
                                        7 Days Mean Streamflow Percentile
                                    </NavLink>
                                    <NavLink
                                        to="/30d-streamflow-monitor"
                                        activeClassName="active"
                                        className="drop-nav-links"
                                        onClick={handleClick}
                                    >
                                        30 Days Mean Streamflow Percentile
                                    </NavLink>
                                </div>
                            </li>
                        </div>

                        <div className="nav-item">
                            <li className="">
                                <button className="nav-dropbtn">Drought Types <i className="fa fa-caret-down" aria-hidden="true"></i></button>
                                <div className="dropdown-content">
                                    <NavLink
                                        to="/standardized-precipitation-index"
                                        activeClassName="active"
                                        className="drop-nav-links"
                                        onClick={handleClick}
                                    >
                                        Standardized Precipitation Index (SPI)
                                    </NavLink>
                                    <NavLink
                                        to="/standardized-runoff-index"
                                        activeClassName="active"
                                        className="drop-nav-links"
                                        onClick={handleClick}
                                    >
                                        Standardized Runoff Index (SRI)
                                    </NavLink>
                                    <NavLink
                                        to="/standardized-soil-moisture-index"
                                        activeClassName="active"
                                        className="drop-nav-links"
                                        onClick={handleClick}
                                    >
                                        Standardized Soil Moisture Index (SSI)
                                    </NavLink>
                                </div>
                            </li>
                        </div>
                        <li className="nav-item">
                            <NavLink
                                to="/drought-reporting"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Drought Reporting
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink
                                to="/drought-news"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Drought News
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
