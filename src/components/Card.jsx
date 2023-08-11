import React from 'react';
import { Link } from 'react-router-dom';

function Card ({ logement }) {
  // Destructuration des propriétés de l'objet logement pour faciliter l'accès
  const { id, title, cover } = logement;

  return (
    // Élément article représentant un logement
    <article key="id">
      {/* Lien vers la page de détails du logement avec son ID */}
      <Link to={`/logement/${id}`}>
        {/* Conteneur de la carte */}
        <figure className="card">
          {/* Image de couverture du logement */}
          <img src={cover} alt={title} className="card-cover" />
          {/* Légende contenant le titre du logement */}
          <div className="overlay">
            <figcaption>
              <h2 className="card-title">{title}</h2>
            </figcaption>
          </div>
        </figure>
      </Link>
    </article>
  );
};
  
  export default Card;
