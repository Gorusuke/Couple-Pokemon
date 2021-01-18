import React, { useEffect, useState } from 'react';
import Card from './Card';
import {images} from '../Info/content'
import './Tablero.css'

const Tablero = () => {

    const [barajas, setBarajas] = useState([]);
    const [baraja, setBaraja] = useState([]);
    // const [firstCard, setFirstCard] = useState({});
    // const [secondCard, setSecondCard] = useState({});
    
    const shuffleArray = (deck) => {
        let cartas = [];

        while (cartas.length < 40) {
            const index = Math.floor(Math.random() * deck.length)
            const carta = {
                image: deck.splice(index, 1)[0],
                // wasCorrect: false
            };
    
            cartas.push(carta)
            cartas.push({...carta});
        }
    
        for (let i = cartas.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = cartas[i];
            cartas[i] = cartas[j];
            cartas[j] = temp;
        }
        // console.info(cartas)
        setBaraja(cartas)
        // return cartas;
    }


    console.info(baraja.image)
    console.info(barajas)

    useEffect(() => {
        shuffleArray(images)
        setBarajas(images);
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