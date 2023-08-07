import { Link } from 'react-router-dom';
import logo from '../assets/404.png';
  
const PageNotFound = () => {
  
  return (
    <div className="center">
      <img src= {logo} alt="Page non trouvée"/>
      <h1>Oups! La page que vous demandez n'existe pas.</h1> 
      <Link to="/">
      Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
  
export default PageNotFound;