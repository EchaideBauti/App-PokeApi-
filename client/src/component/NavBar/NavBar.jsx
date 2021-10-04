import React from 'react';
import StyleNav from '../NavBar/NavBar.module.css';
import logo from '../imagenes/logo.png';
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <div className={StyleNav.container}>
            <nav>
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" />   
                    </Link>
                    
                </div>
        
                <div className={StyleNav.containerButton}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/home/create">Crear Pokemon</a></li>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;