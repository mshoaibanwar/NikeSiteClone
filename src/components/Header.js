import React from 'react'
import HeaderCS from './Header.module.css'

const Header = () => {
  return (
    <nav className={HeaderCS.navbar}>
        <ul className={HeaderCS.Appheader}>
          <div className='left' style={{floatItems: "left", display: "flex"}}>
            <li className={HeaderCS.lil}><a className={HeaderCS.links} href=''>Support</a></li>
            <li className={HeaderCS.lil}><a className={HeaderCS.links} href=''>Delivery</a></li>
            <li className={HeaderCS.lil}><a className={HeaderCS.links} href=''>Legal</a></li>
            <li className={HeaderCS.lil}><a className={HeaderCS.links} href=''>About Us</a></li>
          </div>
          <div className='right' style={{floatItems: "right", display: "flex"}}>
            <li className={HeaderCS.li}><img src='https://sydort.github.io/sportshold/app/img/icon/basket.png'></img></li>
            <li className={HeaderCS.li}>$465.00</li>
            <li className={HeaderCS.li}>4 Items</li>
            <button className={HeaderCS.button}>Login</button>
            <button className={HeaderCS.button}>Register</button>
          </div>
        </ul>
    </nav>
  )
}

export default Header