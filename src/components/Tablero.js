import React, { useEffect, useState } from 'react';
import Card from './Card';
import ContruirBaraja from '../Hooks/ConstruirBaraja';
import './Tablero.css'

const Tablero = () => {

    const [baraja, setBaraja] = useState([]);

    useEffect(() => {
        setBaraja(ContruirBaraja());
    }, [])
    
    return (
        <div className="table">
            {baraja.map((pokemon, i) => 
                <Card 
                    key={i} 
                    pokemon={pokemon}
                />)
            }
        </div>
    );
}
 
export default Tablero;