import React from 'react'
import './Section2.css'
import ProductCard from './ProductCard';

const Section2 = () =>
{
    return(
        <>
            <div className='sec2Container'>
                <div className='content'>
                    <div className='colLeft'>
                        <div className='blockLeft'>
                            <div className='contentTop'>
                                <h3>Discover the new</h3>
                                <h3>NILE KYRIE 3</h3>
                             </div>   
                             <div className='contentBottom'>
                                <button>VIEW COLLECTION</button>
                             </div>
                        </div>
                    </div>
                    <div className='colRight'>
                        <div className='blocktop'>
                            <div className='content'>
                                <h3>Check out the</h3>
                                <h3>NEW ARRIVALS</h3>
                                <button>DISCOVER</button>
                            </div>
                        </div>
                        <div className='bottomBlocks'>
                            <div className='block1'>
                                <div className='content'>
                                    <h3>Best for</h3>
                                    <h3>ATHLETES</h3>
                                </div>
                            </div>
                            <div className='block2'>
                                <div className='content'>
                                    <h3>Feel</h3>
                                    <h3>PREMIUM</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productsHeader'>
                <h1>NEW</h1>
                <h1>POPULAR</h1>
                <h1>TOP PICKS</h1>
            </div>
            <div className='products'>
                <ProductCard url="https://sydort.github.io/sportshold/app/img/products/product1.png" title="Converse Breakpoint Suede Blue" price="45" dis="25"/>
                <ProductCard url="https://sydort.github.io/sportshold/app/img/products/product2.png" title="Converse CT All Star II" price="55"/>
                <ProductCard url="https://sydort.github.io/sportshold/app/img/products/product3.png" title="Adidas Pure Boost Chill" price="60" dis="25"/>
                <ProductCard url="https://sydort.github.io/sportshold/app/img/products/product4.png" title="Puma Duplex W Casual" price="50"/>
                <ProductCard url="https://sydort.github.io/sportshold/app/img/products/product5.png" title="Converse Breakpoint Suede Blue" price="90"/>
                <ProductCard url="https://sydort.github.io/sportshold/app/img/products/product6.png" title="Asics GEL-Epirus" price="50" dis="50"/>
                <ProductCard url="https://sydort.github.io/sportshold/app/img/products/product7.png" title="Adidas Originals Courtvantage Mesh" price="40"/>
                <ProductCard url="https://sydort.github.io/sportshold/app/img/products/product8.png" title="Adidas Originals Climacool 1" price="80"/>
            </div>
        </>
    );
}
export default Section2