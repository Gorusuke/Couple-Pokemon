import React, { useEffect, useState } from 'react';
import Card from './Card';
import {images} from '../Info/content'
import './Tablero.css'


const Tablero = ({intentos, setIntentos, setWin, setSpinner}) => {

    // const [barajas, setBarajas] = useState([]);
    const [baraja, setBaraja] = useState([]);
    const [firstCard, setFirstCard] = useState({});
    const [secondCard, setSecondCard] = useState({});
    const [unflippedCards, setUnflippedCards] = useState([]);
    const [disabledCards, setDisabledCards] = useState([]);
    const [aciertos, setAciertos] = useState(0) 

    // console.info()

    const shuffleArray = (deck) => {
        let cartas = [];

        while (cartas.length < 40) {
            const index = Math.floor(Math.random() * deck.length)
            const carta = {
                image: deck.splice(index, 1)[0]
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

        setBaraja(cartas)
        // return cartas;
        // return cartas;
    }

    useEffect(() => {
        if(shuffleArray(images)){
            setSpinner(false)
        }
    }, [setSpinner])

    useEffect(() => {
        checkForMatch();
        acierto();
        // eslint-disable-next-line
    }, [secondCard])

    const cardFlip = (name, number) => {
        if(firstCard.name === name && firstCard.number === number) return 0;
        if(!firstCard.name) setFirstCard({name, number})
        else if(!secondCard.name) setSecondCard({name, number})
        return 1;
    }

    const checkForMatch = () => {
        if(firstCard.name && secondCard.name){
            setIntentos(intentos + 1)
            const match = firstCard.name === secondCard.name;
            match ? disabledCard() : unflipCard();
        }
    }

    const acierto = () => {
        if(firstCard.name && secondCard.name){
            const hola = firstCard.name === secondCard.name;
            if(hola) setAciertos(aciertos + 1) 
            if(aciertos === 19) setWin(true)
        }
    }

    const disabledCard = () => {
        setDisabledCards([firstCard.number, secondCard.number])
        resetCards();
    } 

    const unflipCard = () => {
        setUnflippedCards([firstCard.number, secondCard.number])
        resetCards();
    }

    const resetCards = () => {
        setFirstCard({});
        setSecondCard({});
    }


    return (
        <div className="table">
            {baraja.map((pokemon, index) => 
                <Card 
                    key={index} 
                    number={index}
                    pokemon={pokemon}
                    flipCard={cardFlip}
                    unflippedCards={unflippedCards}
                    disabledCards={disabledCards}
                />)
            }
            
        </div>
    );
}
 
export default Tablero;