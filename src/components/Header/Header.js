import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import ('./Header.css')
const Header = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Quizee</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <NavLink className='nav-link' to='/'>Home</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className='nav-link' to='/statistics'>Statistics</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className='nav-link' to='/blog'>Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Header;