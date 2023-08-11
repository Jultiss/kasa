import Logo from '../../src/assets/LogoKasa.png';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';        

function Header() {
  return (
      // Conteneur principal pour l'en-tête
      <header>
          <div>
              {/* Lien vers la page d'accueil contenant le logo Kasa */}
              <NavLink to="/">
                  <img src={Logo} alt="Logo Kasa" />
              </NavLink>
          </div>
          {/* Section de navigation avec des liens */}
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