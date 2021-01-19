import React from 'react';
import './Header.css'

const Header = ({intentos}) => {
    return (
        <header>
            <div>
                <button
                    onClick={() => window.location.reload()}
                    className="button-reset"
                >Reiniciar</button>
            </div>
            <div className="title">React - Parejas</div>
            <div className="try">Intentos: <b>{intentos}</b></div>
        </header>
        
    );
}
 
export default Header;