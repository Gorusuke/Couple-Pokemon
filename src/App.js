import React, { useState } from 'react';
import Header from './components/Header';
import Tablero from './components/Tablero';
import './App.css';


function App() {

  const [intentos, setIntentos] = useState(0);

  return (
    <div className="App">
      <Header 
        intentos={intentos}
      />
      <Tablero
        intentos={intentos}
        setIntentos={setIntentos}
      />
    </div>
  );
}

export default App;
