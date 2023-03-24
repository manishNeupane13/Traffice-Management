import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    
    
          <div className="main">
          <div className="search-container">
            <div className='searchbar'>
                  <input type="text" name="search" placeholder='Search' />&emsp;
              <button className="button">Search</button>

            </div>
              </div>
              <div className="navbar">
                  <div className="icon">
                      <img src="logo.png" alt="TMS" />
                      <h2 className="text">TMS ADMIN </h2>
                  </div>
                  <div className="menu">
                      <ul>

                          <li><Link to='/home'>DashBoard</Link></li>
                          <li><Link to="/vehicle">Vehicle</Link></li>
                          <li><Link to="/violations">Violations</Link></li>
                          <li><Link to="/accidents">Accidents</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                        
                      </ul>
                  </div>
                  <br/>
                                 

              </div>

          


    </div>
  )
}
