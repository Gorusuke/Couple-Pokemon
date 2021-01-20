import React, {useEffect, useState} from 'react';
import ListaRankings from './ListaRankings';
// import ListaRanking from './ListaRanking';
import './Ranking.css'

const Ranking = ({playAgain, data}) => {

    // // const rankings = localStorage.getItem('ranking')
    
    // const [arreglos, setArreglos] = useState([]);

    
    // useEffect(() => {
    //     setArreglos(JSON.parse(localStorage.getItem('ranking')))
    // }, [])
    
    // console.info(rankings)
    // const {nombre, intentos} = data;

    // const elements = (nombre, intentos) => {
    //     const container = document.getElementById('elements-container')
    //     const li = document.createElement('li')
    //     const span = document.createElement('span')
    //     li.innerHTML = nombre;
    //     span.innerHTML = intentos;
    //     li.appendChild(container);
    //     span.appendChild(container);
    // }

    // elements(data.nombre, data.intentos)
    // const arreglo = localStorage.getItem('ranking').split(',');
    const arreglos = JSON.parse(localStorage.getItem('ranking'))
    console.info(JSON.parse(localStorage.getItem('ranking')).reverse())
    
    return (
        <div className="ranking-position">
            <div>
                <ul>
                    {arreglos.map((arreglo, i) => {
                        <ListaRankings
                            key={i}
                            arreglo={arreglo}
                        />
                    })}
                </ul>
            </div>
            <div className="ranking-container">
                <button
                    onClick={playAgain}
                    className="button-ranking"                    
                >Salir</button> 
            </div>
        </div>
        
    )
}

export default Ranking;
