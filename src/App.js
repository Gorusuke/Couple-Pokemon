import React, { useState } from 'react';
import Header from './components/Header';
import Tablero from './components/Tablero';
import construirBaraja from './Hooks/ConstruirBaraja'
import './App.css';


function App() {

  const [baraja, setBaraja] = useState(construirBaraja());
  const [parejaSeleccionada, setParejaSeleccionada] = useState([]);
  const [estaComparada, setEstaComparada] = useState(false);

  const seleccionarCarta = (carta) => {
    if(estaComparada || parejaSeleccionada.indexOf(carta) > -1 || carta.wasCorrect) return;
    setParejaSeleccionada([...parejaSeleccionada, carta]);
    // setBaraja({parejaSeleccionada})
    if(parejaSeleccionada.length === 2){
      compararPareja(parejaSeleccionada)
    }
  }

  const compararPareja = (parejaSeleccionada) => {
    setEstaComparada(true);

    // setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      console.info(primeraCarta.image)
      console.info(segundaCarta.image)
      let cartas = baraja;
      if(primeraCarta.image === segundaCarta.image){
        console.info('son iguales')
        // cartas = cartas.map((carta) => {
        //   if(carta.image !== primeraCarta.image){
        //     return carta;
        //   }
        //   return {...carta, wasCorrect: true}
        // })
      }
      console.info('No son iguales')

      // console.info(parejaSeleccionada)
      // setBaraja(cartas)
      // setEstaComparada(false)
      // setParejaSeleccionada([]);

    // }, 1000);
  }


  return (
    <div className="App">
      <Header />
      <Tablero 
        baraja={baraja}
        parejaSeleccionada={parejaSeleccionada}
        seleccionarCarta={(carta) => seleccionarCarta(carta)}      
      />
    </div>
  );
}

export default App;
