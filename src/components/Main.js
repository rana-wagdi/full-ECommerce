import React from 'react';
import Data from './Data';
function Main() {
    return(
        <main className='main'>
            <div className='row center'>
           {
               Data.products.map((products)=>(
                   <div className='card'>
                       <a href=''>
                           <img className='medium' src='./images/product/product-1.jpg'  />
                       </a>
                <div className='card-body'>
                <a href=''>
                <h2>Nike Slim Shirts</h2>
                </a>
                <div className='rating'>
                <span>
                    <i className='fa fa-star'></i>
                </span>
                <span>
                    <i className='fa fa-star'></i>
                </span>
                <span>
                    <i className='fa fa-star'></i>
                </span>
                <span>
                    <i className='fa fa-star'></i>
                </span>
                <span>
                    <i className='fa fa-star'></i>
                </span>
                </div>
                <div className='price'>
                $120
                </div>
                </div>
                   </div>
               ))
           }
            </div>
        </main>
    )
}
export default Main;