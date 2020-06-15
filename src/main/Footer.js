import React from 'react';
import './Footer.css';

import logoReact from '../assets/logo192.png'

function Footer() {
    return (
        <div className="Footer-container">
            <div className="Footer-divider"></div>
            <div className="Footer-url-site">www.devdicas.com</div>
            <div className="Footer-copyright">© 2020-2020 Todos os direitos reservados. www.devdicas.com</div>
            <div className="Footer-powered">Powered by <img src={logoReact} alt="React" className="Footer-logo-react" /> React</div>
        </div>
    );
}

export default Footer;

