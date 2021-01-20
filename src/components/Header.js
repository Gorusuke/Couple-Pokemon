import React from 'react';
import './Header.css'

const Header = ({intentos, playAgain}) => {
    return (
        <header>
            <div className="reset-button">
                <button
                    onClick={playAgain}
                    className="button-reset"
                >Reiniciar</button>
            </div>
            <div className="title">React - Parejas</div>
            <div className="try">Intentos: <b>{intentos}</b></div>
        </header>
        
    );
}
 
export default Header;