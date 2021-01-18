import React from 'react';
import FlipCard from 'react-flipcard-2'
import './Cartas.css'


const Card = (props) => {


    const {pokemon, estaSiendoComparada, seleccionarCarta, wasCorrect} = props
    const {image} = pokemon;
    
    return (
        <div className="carta" onClick={seleccionarCarta}>
            <FlipCard
                flipped={estaSiendoComparada || wasCorrect}
                disabled={true}
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