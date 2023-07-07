import React from 'react'
import './ProductCard.css'

const mystyle = {
    color: "#FF7170"
}

const ProductCard = (props) =>
{
    return(
        <>
           <div className='Card'>
                <div className='top'>
                    {props.dis > 0 ? 
                       <h1 style={mystyle}>${props.price}.00</h1> : <h1>${props.price}.00</h1>
                    }
                    {props.dis > 0 && 
                    <div className='discount'>
                        <h2>-{props.dis}%</h2>
                    </div>
                    }
                </div>
                <div className='image'>
                    <img src={props.url}></img>
                </div>
                <div className='bottom'>
                    <h1>Men</h1>
                    <h2>{props.title}</h2>
                    <h3>#16378271</h3>
                </div>
           </div>
        </>
    );
}
export default ProductCard