import Logo from '../../src/assets/LogoKasa.png';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';        

function Header() {
    return (
      <header>
        <div>
          <NavLink to="/">
            <img src={Logo} alt="Logo Kasa" />
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/a-propos">A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;