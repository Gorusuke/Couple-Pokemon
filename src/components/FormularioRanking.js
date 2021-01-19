import React from 'react';
import './FormularioRanking.css';

const FormularioRanking = ({intentos, setRanking}) => {

    const authentication = (e) => {
		e.preventDefault();
		const data = {
            "nombre": e.target.nombre.value,
            "intentos": intentos
        }
        // console.info(data)
        localStorage.setItem('nombre', data.nombre)
        localStorage.setItem('intentos', data.intentos)
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
