import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Rating from '../components/Rating';


const HomeScreen = () =>  {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const {Data} = await axios.get('/api/products')
            setProducts(Data)
        }
        fetchData()
  
    }, [])

    return (
        <div className='row center'>
        {products.map((product)=>(
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