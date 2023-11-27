import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Header = () =>{
    return(
        <div className='container mb-5 border-bottom rounded-bottom'>
        <header className='row'>
        <img className='col-sm-2' src='https://raw.githubusercontent.com/taylorhelene/Comic-website-with-no-boilerplate/main/public/images/logo%20.png'/>
        <Navbar className='mx-auto' />
        </header>
        </div>
    )
}

export default Header;