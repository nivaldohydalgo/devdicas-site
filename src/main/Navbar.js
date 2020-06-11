import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar-container">
            <div className="Navbar-left">
                <div className="Navbar-icon">
                    <i class="material-icons Icon-style">menu</i>
                </div>
                <div>
                    devDicas
                </div>
            </div>
            <div className="Navbar-right">
                <i class="material-icons Icon-style">email</i>
                <i class="material-icons Icon-style">person</i>
            </div>
        </div>
    );
}

export default Navbar;
