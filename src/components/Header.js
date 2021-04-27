import react from 'react';


function Header() {
    return(
        <div className='header'>
            <div className='brand'>
                <a href="/">amazona</a>
            </div>
            <div className="header-nav">
                <a href="/cart">Cart</a>
                <a href="/sign">Sign In</a>
            </div>
        </div>
    )
}
export default Header;