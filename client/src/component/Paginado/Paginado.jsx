import React from 'react';
import stylePage from '../Paginado/Paginado.module.css';

export default function Paginado({pokemonsxpage,AllPokemon,paginado}){
    const pageNumbre = [];

    for(let i = 0; i < Math.ceil(AllPokemon/pokemonsxpage);i++) {
        pageNumbre.push(i+1);
    };

    return (
        <div className={stylePage.divPage} >
            <ul className={stylePage.containerPage}>
                {pageNumbre.map(num => (
                    <li>
                        <a href="#" onClick={()=> paginado(num)}>{num}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}