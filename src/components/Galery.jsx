import Card from './Card';
import data from '../data/logements';

function Galery () {
  return (
      <div>
          {/* Boucle sur les données pour rendre chaque élément comme une carte */}
          {data.map((item) => (
              <Card key={item.id} item={item} />
          ))}
      </div>
  );
};

export default Galery;