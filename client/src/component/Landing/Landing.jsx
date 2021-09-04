import React from 'react';
import {Link} from 'react-router-dom';
import style from '../Landing/Landing.module.css';
import logo from '../imagenes/logo.png';
import poke from '../imagenes/gato.png';
import pika from '../imagenes/pika.png';
import BtnEntrar from '../imagenes/BtnEntrar.png';

const Landing = () => {
    return (
        <div className={style.back}>
            <div className={style.centrado}>
            <div className={style.logo}>
                <img src={logo} alt="img"  />
            </div>
            <div className={style.centerDt}>
            <div>
                <img src={poke} alt="imgg" width="300px" />
            </div>
            <div className={style.letras}>
                <h1>MUNDO POKEMON</h1>
                <p>Aca encontraras todo sobre tus pokemones favoritos</p>
                <p>Solo tenes que hacer "Click" sobre el boton "Entrar"</p>
            </div>
            <div>
                <img src={pika} alt="imgg" width="300px" />
            </div>
            </div>
            
            <div className={style.buttonEntrar}>
                <Link to="/home">
                    <img src={BtnEntrar} outline="none" alt="entrar"/>
                </Link>
            </div>
            </div>
        </div>
    )
};

export default Landing;