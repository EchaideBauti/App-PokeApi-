import React from "react";
import styeleCardHabi from './CardHabi.module.css';


const CardHabi = ({types1,attack,defense,hp})=>{
    return (
        <div className={styeleCardHabi.containerCardH}>
            <p className={styeleCardHabi.pStyle}>Tipo: {types1}</p>
            <p className={styeleCardHabi.pStyle}>Vida: {hp}</p>
            <p className={styeleCardHabi.pStyle}>Ataque: {attack}</p>
            <p className={styeleCardHabi.pStyle}>Defensa: {defense}</p>
        </div>
    )
}

export default CardHabi;