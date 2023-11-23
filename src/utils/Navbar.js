import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {NavLink, Link } from "react-router-dom";
import styles from './../page.module.css';

const Navbar=()=>{
    return (
        <nav className='col-sm-8 navbar navbar-default mx-auto'>
            <NavLink className='m-1 text-info' to="/" > Characters </NavLink>
            <NavLink className='m-1 text-info' to="/comics"> Comics </NavLink>
            <NavLink className='m-1 text-info' to="/games"> Games </NavLink>
        </nav>
    )
}
export default Navbar;