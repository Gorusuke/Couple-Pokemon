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
  const [win, setWin] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const [formulario, setFormulario] = useState(false);
  const [ranking, setRanking] = useState(false);


  const playAgain = () => {
    setSpinner(true)
    window.location.reload();
    setWin(false)
  }

  const mostrarFormulario = () => {
    setFormulario(true)
  }


  return (
    <div className="App">
      {ranking 
        ? <Ranking />
        : <>
          {formulario 
            ? <FormularioRanking intentos={intentos} setRanking={setRanking} />
            : <> 
                {spinner 
                  ? <Spinner/> 
                  : <>
                      {win 
                        ? <Ganador 
                            intentos={intentos}
                            playAgain={() => playAgain()}
                            mostrarFormulario={() => mostrarFormulario()}
                          />
                        : <>
                            <Header intentos={intentos} />
                            <Tablero
                              intentos={intentos}
                              setIntentos={setIntentos}
                              setWin={setWin}
                              setSpinner={setSpinner}
                            />
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
