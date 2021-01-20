import React, {useEffect, useState} from 'react';
import ListaRankings from './ListaRankings';
import './Ranking.css'


const Ranking = ({playAgain}) => {
    
    const [arreglos, setArreglos] = useState([]);
    const [blank, setBlank] = useState(false);



    useEffect(() => {
        limits(JSON.parse(localStorage.getItem('ranking')));
    }, [])

    const limits = (arr) => {
        if(arr === null){
            setBlank(true)
            return;
        }

        let ranked = arr.sort(function(x, y){
            return x.intentos - y.intentos;
        })

        // let items = []

        if(ranked.length >= 11) {
            ranked.splice(ranked.length - 1, 1)
            // items.push(item)
        }

        setArreglos(ranked)
    }

    console.info(arreglos)

    return (
        <div className="ranking-position">
            {blank 
                ?   <h2>No hay ningún resultado aun</h2>
                :   <div>
                        <h2>Ranking De Los Mejores</h2>
                        <ul>
                            {arreglos.map((arreglo, i) => 
                                <ListaRankings
                                    key={i}
                                    arreglo={arreglo}
                                    number={i}
                                />
                            )}
                        </ul>
                    </div>
            }
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
