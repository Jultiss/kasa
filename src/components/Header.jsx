import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../src/assets/LogoKasa.png';

function Header() {
  return (
    // Conteneur principal pour l'en-tête
    <header>
        {/* Lien vers la page d'accueil contenant le logo Kasa */}
        <div>
            <NavLink to="/">
                <img src={Logo} alt="Logo Kasa" />
            </NavLink>
            {/* Section de navigation avec des liens */}
        </div>
        <nav>
            <ul>
                <li>
                    {/* Lien vers la page d'accueil */}
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    {/* Lien vers la page "A Propos" */}
                    <NavLink to="/a-propos">A Propos</NavLink>
                </li>
            </ul>
        </nav>
    </header>  
  );
}
  
  export default Header;