import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import ('./Header.css')
const Header = () => {
    const [open, setOpen]= useState(false)
    return (
        <nav className='d-flex justify-content-between bg-success text-white nav-bar shadow '>
            <h3>Queezy</h3>
            <ul className='navbar'>
                <div className='nav-icon d-md-none'  onClick={()=> setOpen(!open)}>
                {
                open?
                <XMarkIcon/>:
                <Bars3Icon></Bars3Icon>
                  }
                </div>
            <div className={`nav-item d-md-flex ${open?'top-0':'top-[-130px]'}`}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
            </ul>
        </nav>
    );
};

export default Header;