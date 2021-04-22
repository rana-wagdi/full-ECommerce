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

                   </div>
               ))
           }
            </div>
        </main>
    )
}
export default Main;