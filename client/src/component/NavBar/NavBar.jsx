import React from 'react';
import Logo from '../imagenes/logo.png';
import style from'../NavBar/NavBar.module.css';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <div className={style.container}>
            <nav>
                <div>
                    <Link to='/'>
                        <img src={Logo} alt="Logo"/>
                    </Link> 
                </div>
        
                <div className={style.containerButton}>
                    <Link to='/home'>
                        <li><a href="# ">Home</a></li>
                    </Link>
                    <Link to='/home/create'>
                        <li><a href="# ">Crear Pokemon</a></li>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;