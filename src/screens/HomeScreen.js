import React from 'react';
import Rating from '../components/Rating';
import Data from '../components/Data';

const HomeScreen = () =>  {
    return (
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
             <Rating rating={product.rating} numReviews={product.numReviews} />
                
                         <div className='price'>
                     ${product.price}
                     </div>
             </div>
 </div>

            ))
        }
         </div>
    )
}

export default HomeScreen;