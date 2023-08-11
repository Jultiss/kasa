import React from 'react';
import logo from '../../src/assets/LogoKasaWhite.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="footer_logo">
                    <img src={logo} alt="logo Kasa White" />
                </div>
                <div className="footer_content">
                    <h2>© 2020 Kasa. All rights reserved</h2>
                </div>
            </div>
        </footer>
    );
}

export default Footer;