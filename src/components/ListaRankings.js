import React from 'react';
import './Ranking.css'

const ListaRankings = ({arreglo, number}) => {

	const {name, score} = arreglo;

	return (
		<div>
			<li className="winner-container">
				{number + 1}. {name}<b>{score}</b>
			</li>
		</div>
	);
}

export default ListaRankings;
