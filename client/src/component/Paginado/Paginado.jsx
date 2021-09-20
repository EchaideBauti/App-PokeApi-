import React from 'react';
import stylePage from '../Paginado/Paginado.module.css';

export default function Paginado({pokemonsxpage,AllPokemon,paginado}){
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(AllPokemon/pokemonsxpage);i++) {
        pageNumber.push(i);
    };

    return (
        <div className={stylePage.divPage} >
            <ul className={stylePage.containerPage}>
                {pageNumber && pageNumber.map(num => (
                    <li key={num} className={stylePage.liStyle}>
                        <a href="# " onClick={()=> paginado(num)}>{num}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}