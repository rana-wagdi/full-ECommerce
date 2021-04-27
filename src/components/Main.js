import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

function Main() {
    return(
        <BrowserRouter>
        <main className='main'>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
          
        </main>
        </BrowserRouter>
    )
        
}
export default Main;