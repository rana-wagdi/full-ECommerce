import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../components/Data';
import Rating from '../components/Rating'

const ProductScreen = (props) =>  {
    const product = Data.products.find((x) => x._id === props.match.params.id);

    if(!product) {
        return <div>Product Not Found</div>
    }
    return (
        <div>
             <Link to="/">Back to result</Link>
        <div className='row'>
        <div className='col-2'>
        <img className="large" src={props.image} alt={product.name}></img>
            </div>
        
        <div className='col-1'>
            <ul>
                <li>
                    <h1>{product.name}</h1>
                </li>
                <li>
                    <Rating rating={product.rating} numReviews={product.numReviews} />
                </li>
                <li>Price : ${product.price} </li>
                <img className='medium' src={product.image} alt={product.name} />
            </ul>

        </div>
        <div className='col-1'>

        </div>
            </div>
            </div>
        
        
    )
}

export default ProductScreen;