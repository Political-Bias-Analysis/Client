import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-container'>
      <h2 className='header'>Explore Data</h2>
      <ul className='nav-right-items'>
        <li>
          <a href="dashboard" className='a-link'>Dashboard</a>
        </li>
        <li>
          <a className='a-link' href="models">Models</a>
        </li>
        <li>
          <a className='a-link' href="report">Reports</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar