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
	// const [score, setScore] = useState([])
  const [win, setWin] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [formulario, setFormulario] = useState(false);
  const [ranking, setRanking] = useState(false);


  const playAgain = () => {
    window.location.reload();
    setWin(false)
    setSpinner(true)
    setFormulario(false)
    setRanking(false)
  }

  const mostrarFormulario = () => {
    setFormulario(true)
  }

  return (
    <div className="App">
      {ranking 
        ? <Ranking playAgain={() => playAgain()} /*score={score}*/ />
        : <>
          {formulario 
            ? <FormularioRanking 
              intentos={intentos} 
              setRanking={setRanking}
              // setScore={setScore}
            />
            : <> 
                {spinner 
                  ? <Spinner/> 
                  : <>
                      {win 
                        ? <Ganador 
                            intentos={intentos}
                            playAgain={() => playAgain()}
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
                            <button className="button button-2" onClick={() => setRanking(true)}>Ranking</button>
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
