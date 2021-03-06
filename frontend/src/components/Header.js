import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default () =>
    
    <header id="main-header">
        <div className="header-content">
            <Link to='/'>
                <img src={logo} alt="Instashare"/>
            </Link>
            <Link to='/new'>
                <img src={camera} alt="Enviar publicação"/>
            </Link>
        </div>
    </header>
