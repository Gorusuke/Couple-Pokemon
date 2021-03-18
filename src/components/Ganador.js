import React from 'react';
import './Ganador.css';


const Ganador = ({intentos, salir, mostrarFormulario, setRanking}) => {
  return (
    <div className="container">
      <div className="modal">
        <div className="image">
          <img src="https://www.awai.com/_img/content/2019/08/members-master-an-in-demand-skill-and-win-1500/001.jpg" className="img" alt="Winner" />
        </div>
        <div className="text-container">
          <p className="text">Tu numero de intentos fueron <b>{intentos}</b></p>
        </div>
        <div className="buttons-container">
          <div>
            <button 
              onClick={mostrarFormulario}
              className="button button-2"
            >Guardar Puntaje</button>
          </div>
          <div>
            <button 
              onClick={() => setRanking(true)}
              className="button button-2"
            >Ranking</button>
            <button 
              onClick={salir}
              className="button"
            >Volver a Jugar</button>
          </div>                    
        </div>
      </div>
    </div>
  )
};

export default Ganador;
