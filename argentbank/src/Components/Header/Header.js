import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../designs/img/argentBankLogo.png';
function Header() {
    return (
        <header>
            <h1 className='sr-only'></h1>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Bank Logo" />
                </Link> 
                <div className='not-connected'>
                    <Link to='/login'>
                        <i className="fa-solid fa-circle-user"></i>
                        <p>Sign In</p>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
export default Header;