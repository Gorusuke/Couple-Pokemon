import React, { useEffect, useState } from 'react';
import './FormularioRanking.css';
import firebase from '..firebase/firebase'
import 'firebase/firestore'


const FormularioRanking = ({intentos, setRanking}) => {

	const db = firebase.firestore()

	const [score, setScore] = useState([])


	useEffect(() => {
		if(db){
			const player = db
				.collection('Ranking')
				.orderBy('score')
				.limit(100)
				.onSnapshot(querySnapshot => {
					const data = querySnapshot.docs.map(doc => ({
							...doc.data(),
							id: doc.id
					}))
					setScore(data)
			})
			return player
		}		
	}, [db])

   
	const authentication = (e) => {
		e.preventDefault();
		let data = {
			"nombre": e.target.nombre.value,
			"intentos": intentos
		}
		if(db){
			db.collection('Ranking').add({
				name: data.nombre,
				score: data.intentos
			})
		}
		setRanking(true)
		// addlocalStorage(data);
	}

	// const addlocalStorage = (data) => {
	// 	let dataBase;
	// 	dataBase = getLocalStorage();
	// 	dataBase.push(data)
	// 	localStorage.setItem('ranking', JSON.stringify(dataBase))
	// }
	
	// const getLocalStorage = () => {
	// 	let info;
	// 	if(localStorage.getItem('ranking') === null){
	// 			info = [];
	// 	} else {
	// 			info = JSON.parse(localStorage.getItem('ranking'));
	// 	}
	// 	return info;
	// }


	return (
		<div>
			<form 
					onSubmit={authentication}
			>
				<div className="container-ranking">
					<div className="container-formulario">
							<h2>Ingresa tus datos</h2>
							<div className="container-input">
								<label htmlFor="nombre"><b>Nombre:</b></label>
								<input 
									type="nombre" 
									id="nombre" 
									placeholder="Ingresa tu Nombre" 
									name="nombre"
									required 
								/>
							</div>
							<p>Tu numero de intentos fueron <b>{intentos}</b></p>
					</div>
					<div className="ranking-container">
						<input 
							type="submit"
							className="button-ranking"
							value="Enviar"
						/>
					</div>
				</div>    
			</form>
		</div>
	);
}

export default FormularioRanking;
