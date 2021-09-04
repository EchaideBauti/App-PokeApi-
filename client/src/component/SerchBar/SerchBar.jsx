import React from 'react';
import styleSeachBar from '../SerchBar/SerchBar.module.css';

const SerchBar = ()=> {
    
    return (
        <div className={styleSeachBar.container}>
            <div>
                <select>
                    <option value="#">Acendente</option>
                    <option value="#">Decendiente</option>
                    <option value="#">Fuerza</option>
                    <option value="#">A - Z</option>
                    <option value="#">Z - A</option>
                </select>
            </div>
            <div>
                <input className={styleSeachBar.inputSeach} type="text" placeholder="Busca tu pokemon!"/>
            </div>
            <div>
                <button className={styleSeachBar.button} type="button">Buscar</button>
            </div>
            <div>
                <select>
                    <option value="#">API</option>
                    <option value="#">DB</option>
                </select>
            </div>
            <div>
                <select>
                    <option value="#">Normal</option>
                    <option value="#">Fuego</option>
                    <option value="#">Agua</option>
                    <option value="#">Tierra</option>
                    <option value="#">Piedra</option>
                    <option value="#">Rayo</option>
                    <option value="#">Magico</option>
                    <option value="#">Volador</option>
                    <option value="#">Cosmico</option>
                </select>
            </div>
        </div>
    )
};

export default SerchBar;