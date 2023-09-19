import React from 'react'
import { NavLink } from "react-router-dom";
import Logo1 from '../assets/images/wcl_iitgn.png'
import Logo2 from '../assets/images/Media-Lab-Asia.png'

const Footer = () => {
  return (
    <div>

      <div className="footer">
        <div className="footer-image">
          <div className="footer-logo-2">
            <a href="https://vmishra.people.iitgn.ac.in/water&climate/" target="_blank" rel="noreferrer noopener"><img
              src={Logo1} alt="WCl IITGN" /></a>
          </div>
          <div className="footer-logo-1">
            <a href="https://dic.gov.in/" target="_blank" rel="noreferrer noopener"> <img src={Logo2}
              alt="Media Lab Asia" /> </a>
          </div>
        </div>

        <div className="footer-menu">
        <NavLink className='footer-menu-item' to="/disclaimer" onClick={() => window.scrollTo(0, 0)}>
        Disclaimer
          </NavLink>|
          <NavLink className='footer-menu-item' to="/acknowledgement" onClick={() => window.scrollTo(0, 0)}>
          Acknowledgement
          </NavLink>|

          <NavLink className='footer-menu-item' to="/contact" onClick={() => window.scrollTo(0, 0)}>
          Contact Us
          </NavLink>



        </div>
      </div>
    </div>
  )
}

export default Footer