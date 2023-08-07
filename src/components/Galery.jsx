import Card from './Card';
import data from '../data/logements';
import '../styles/Galery.css';

const Galery = () => {
    return (
        <div className="Galery">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      );
    };

export default Galery;