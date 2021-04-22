import React from 'react';
import Data from './Data';
function Main() {
    return(
        <main className='main'>
            <div className='row center'>
           {Data.products.map((product)=>(
                   <div key={product._id} className='card'>
                       <a href={`/product/${product._id}`}>
                           <img className='medium' src={product.image} alt={product.name} />
                       </a>
                <div className='card-body'>
                <a href={`/product/${product._id}`}>
                <h2>Nike Slim Shirts</h2>
                </a>
                <div className='rating'>
                <span><i className='fa fa-star'></i> </span>
                <span><i className='fa fa-star'></i></span>
                <span><i className='fa fa-star'></i></span>
                <span><i className='fa fa-star'></i></span>
                <span><i className='fa fa-star-half-o'></i></span>
                </div>
                <div className='price'>
                ${product.price}
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