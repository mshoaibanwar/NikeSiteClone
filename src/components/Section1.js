import React from 'react'
import './Section1.css'
import shoe from '../shoes.png'

const Section1 = () => {
  return (
    <>
        <div className='secContainer'>
            <div className='secleft'>
                <img className='shoesimg' src={shoe}></img>
            </div>
            <div className='secright'>
                <div className='content'>
                    <h3>From $80.00</h3>
                    <h1>Nike Air Max</h1>
                    <h2>50 Variants</h2>
                    <p>Since this is our favourite Sneaker, Since this is our favourite Sneaker.</p>
                    <p className='pBtn'>BROWSE VARIANTS</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section1