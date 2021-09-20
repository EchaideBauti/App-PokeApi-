import React from 'react';
import styleCard from '../CardPokemon/Card.module.css';
import CardHabi from '../CardHabi/CardHabi';

const Card = ({name,image,types1,types,attack,defense,hp}) => {
    return(
        <div className={styleCard.container}>
            <div className={styleCard.name}>
                <h3 className={styleCard.titleName}>{name}</h3>
            </div>

            <div className={styleCard.img}>
                <img src={image} alt="img" width="150px" height="150px"/>
            </div>

            <div>
                <div>
                    <CardHabi types1={types1 ? types1 : types.map(e=> e.name)}  attack={attack} hp={hp} defense={defense}/>
                </div>
            </div>
        </div>
    )
};

export default Card;