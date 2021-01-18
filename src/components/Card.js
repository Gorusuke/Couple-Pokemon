import React from 'react';
import FlipCard from 'react-flipcard-2'
import './Cartas.css'


const Card = ({pokemon}) => {
    
    const {image} = pokemon;

    return (
        <div className="carta">
            <FlipCard
                // flipped={estaSiendoComparada || wasCorrect}
                // disabled={true}
            >
                <div className="front"><h3>{pokemon.image.slice(-6)}</h3></div>
                <div className="back">
                    <img src={image} className="img" alt="nombre"/>
                </div>
            </FlipCard>
        </div>
    );
}
 
export default Card;