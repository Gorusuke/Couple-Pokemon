import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div>
                <button className="button-reset">Reiniciar</button>
            </div>
            <div className="title">React - Parejas</div>
            <div className="try">Intentos: {0}</div>
        </header>
        
    );
}
 
export default Header;