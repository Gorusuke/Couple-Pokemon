import React from 'react';
import './Ranking.css'

const ListaRankings = ({arreglo, number}) => {

    const {nombre, intentos} = arreglo;

    return (
        <div>
            <li className="winner-container">{number + 1}. {nombre}<b>{intentos}</b></li>
        </div>
    );
}

export default ListaRankings;
