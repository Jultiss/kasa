import Card from './Card';
import data from '../data/logements';
import '../styles/Galery.css';

function Galery () {
  return (
      <div className="Galery">
          {/* Boucle sur les données pour rendre chaque élément comme une carte */}
          {data.map((item) => (
              <Card key={item.id} item={item} />
          ))}
      </div>
  );
};

export default Galery;