import React from 'react';
import Loginform from '../../Components/Loginform/Loginform';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
/* Login page */
function Login () {
    return (
        <div className='signin-page'>
            <main className='bg-dark'>
                {/* Returns form component */}
                < Loginform />
            </main>
        </div>
        
    )
}
export default Login;