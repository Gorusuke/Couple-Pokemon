import React from 'react';
import './Ranking.css'

const ListaRankings = ({arreglo}) => {

    const {nombre, intentos} = arreglo;

    // console.info(arreglo.nombre)

    return (
        <div>
            <li className="winner-container">{nombre}<b>{intentos}</b></li>
        </div>
    );
}

export default ListaRankings;
