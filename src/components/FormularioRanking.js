import React from 'react';
import './FormularioRanking.css';
import firebase from '../firebase/firebase'
import 'firebase/firestore'


const FormularioRanking = ({intentos, setRanking}) => {

	const db = firebase.firestore()
   
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
	}

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
							className="send-button"
							value="Enviar"
						/>
					</div>
				</div>    
			</form>
		</div>
	);
}

export default FormularioRanking;
