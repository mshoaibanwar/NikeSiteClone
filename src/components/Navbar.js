import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

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
            <li><NavLink to="/Home" className="activeA" activeClassName="activeA" style={AStyle}>Home</NavLink></li>
            <li><NavLink to="/Men" className="link" activeClassName="activeA" style={AStyle}>Men</NavLink></li>
            <li><NavLink to="/Women" className="link" activeClassName="activeA" style={AStyle}>Women</NavLink></li>
            <li><NavLink to="/Children" activeClassName="activeA" style={AStyle}>Children</NavLink></li>
            <li><NavLink to="/Baby" activeClassName="activeA" style={AStyle}>Baby</NavLink></li>
            <li><NavLink to="/OurBrands" activeClassName="activeA" style={AStyle}>Our Brands</NavLink></li>
            <li><NavLink to="/Sales" activeClassName="activeA" style={AStyle}>Sales</NavLink></li>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar