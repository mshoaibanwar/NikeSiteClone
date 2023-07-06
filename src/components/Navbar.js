import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const AStyle = {
        textDecoration: "none"
    }
  return (
    <nav>
        <ul className="Navbar" style={{backgroundColor: "rgb(108, 38, 38)"}}>
          <div className='logo'>
            <li><h2 style={{padding: "0", color: "white"}}>SPORTSHOLD</h2></li>
          </div>
          <div className='right' style={{display: "flex", alignItems: "center"}}>
            <li><a className='activeA' style={AStyle} href=''>Home</a></li>
            <li><a style={AStyle} href=''>Men</a></li>
            <li><a style={AStyle} href=''>Women</a></li>
            <li><a style={AStyle} href=''>Children</a></li>
            <li><a style={AStyle} href=''>Baby</a></li>
            <li><a style={AStyle} href=''>Our Brands</a></li>
            <li><a style={AStyle} href=''>Sales</a></li>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar