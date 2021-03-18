import React, { useState } from 'react';
import Header from './components/Header';
import Tablero from './components/Tablero';
import Spinner from './components/Spinner';
import Ganador from './components/Ganador';
import FormularioRanking from './components/FormularioRanking';
import Ranking from './components/Ranking';
import './App.css';

function App() {

  const [intentos, setIntentos] = useState(0);
  const [win, setWin] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [formulario, setFormulario] = useState(false);
  const [ranking, setRanking] = useState(false);


  const playAgain = () => {
    window.location.reload();
    setSpinner(true)
  }

  const salir = () => {
    setWin(false)
    setRanking(false)
    setFormulario(false)
  }

  const mostrarFormulario = () => {
    setFormulario(true)
  }

  return (
    <div className="App">
      {ranking 
        ? <Ranking salir={() => salir()} />
        : <>
          {formulario 
            ? <FormularioRanking 
              intentos={intentos} 
              setRanking={setRanking}
            />
            : <> 
                {spinner 
                  ? <Spinner/> 
                  : <>
                      {win 
                        ? <Ganador 
                            intentos={intentos}
                            salir={() => salir()}
                            mostrarFormulario={() => mostrarFormulario()}
                            setRanking={setRanking}
                          />
                        : <>
                            <Header intentos={intentos} playAgain={() => playAgain()}/>
                            <Tablero
                              intentos={intentos}
                              setIntentos={setIntentos}
                              setWin={setWin}
                              setSpinner={setSpinner}
                            />
                            <div className="home-button-container">
                              <button className="send-button" onClick={() => setRanking(true)}>Ranking</button>
                            </div>
                          </>
                      } 
                    </>
                }
              </>
          }
        </>
      }
      
    </div>
  );
}

export default App;
