import React from 'react';
import styleCard from '../CardPokemon/Card.module.css';

const Card = ({name,image}) => {
    return(
        <div className={styleCard.container}>
            <div className={styleCard.name}>
                <h3 className={styleCard.titleName}>{name}</h3>
            </div>
            <div className={styleCard.img}>
                <img src={image} alt="img" width="200px" height="200px"/>
            </div>
            
        </div>
    )
};

export default Card;