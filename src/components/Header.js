import react from 'react';


function Header() {
    return(
        <div className='header'>
            <div className='brand'>
                <a href="App.js">amazona</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </div>
    )
}
export default Header;