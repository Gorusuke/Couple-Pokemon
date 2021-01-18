import React, { useEffect, useState } from 'react';
import Card from './Card';
import {images} from '../Info/content'
import './Tablero.css'

const Tablero = () => {

    const [baraja, setBaraja] = useState([]);
    // const [firstCard, setFirstCard] = useState({});
    // const [secondCard, setSecondCard] = useState({});
    
    const shuffleArray = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }        
    }

    useEffect(() => {
        shuffleArray(images)
        setBaraja(images);
    }, [])

    // const flipCard = () => {
    //     console.info('hola')
    //     if(!firstCard.image){
    //         setFirstCard()
    //     }
    // }
    
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