import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-container'>
      <h1 className='header'>Explore Data</h1>
      <ul className='nav-left-items'>
        <li>
          <a href="dashboard">Dashboard</a>
        </li>
        <li>
          <a href="models">Models</a>
        </li>
        <li>
          <a href="report">Reports</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar