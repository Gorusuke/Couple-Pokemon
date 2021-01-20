import React, {useEffect, useState} from 'react';
import ListaRankings from './ListaRankings';
import './Ranking.css'


const Ranking = ({playAgain}) => {
    
    const [arreglos, setArreglos] = useState([]);
    const [rank, setRank] = useState([])

    

    useEffect(() => {
        rankeando(JSON.parse(localStorage.getItem('ranking')))
        // limits(rank);
    }, [])

    const rankeando = (list) => {
        const ranked = list.sort(function(x, y){
            return y.intentos - x.intentos;
        })
        setRank(ranked)   
    }

    // const limits = (arr) => {
    //     let items = []
    //     while (items.length < 10) {
    //         const item = arr.splice(arr, 1)
    //         items.push(item)
    //     }
    //     setArreglos(items)
    // }

    console.info(rank)
    // console.info(arreglos)
    
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
    // const arreglos = JSON.parse(localStorage.getItem('ranking'))
    // console.info(JSON.parse(localStorage.getItem('ranking')).reverse())
    
    return (
        <div className="ranking-position">
            <div>
                <ul>
                    {rank.map((arreglo, i) => 
                        <ListaRankings
                            key={i}
                            arreglo={arreglo}
                        />
                    )}
                </ul>
            </div>
            <div className="button-container">
                <button
                    onClick={playAgain}
                    className="button-ranking"                    
                >Salir</button> 
            </div>
        </div>
        
    )
}

export default Ranking;
