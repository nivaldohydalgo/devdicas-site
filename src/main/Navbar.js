import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar-container">
            <div className="Navbar-left">
                <div className="Navbar-div-icon"><i class="material-icons Navbar-def-icon">menu</i></div>
                <div className="Navbar-separator"></div>
                <div className="Navbar-logo">
                    <span className="Navbar-logo-dev">dev</span>
                    <span className="Navbar-logo-dicas">Dicas</span>
                </div>
            </div>
            <div className="Navbar-right">
                <div className="Navbar-div-icon"><i class="material-icons Navbar-def-icon">email</i></div>
                <div className="Navbar-separator"></div>
                <div className="Navbar-div-icon"><i class="material-icons Navbar-def-icon">person</i></div>
            </div>
        </div>
    );
}

export default Navbar;
