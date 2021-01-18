import React from 'react';
import Card from './Card';
import './Tablero.css'

const Tablero = ({baraja, parejaSeleccionada, seleccionarCarta}) => {
    
    return (
        <div className="table">
            {baraja.map((pokemon, i) => {
                const estaSiendoComparada = parejaSeleccionada.indexOf(pokemon) > -1;
                return <Card 
                    key={i} pokemon={pokemon}
                    estaSiendoComparada={estaSiendoComparada}
                    seleccionarCarta={() => seleccionarCarta(pokemon)}
                    wasCorrect={pokemon.wasCorrect}
                />})
            }
        </div>
    );
}
 
export default Tablero;