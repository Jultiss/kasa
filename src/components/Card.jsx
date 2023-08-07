import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.scss'

function Card ({ logement }) {
  const { id, title, cover } = logement;

    return (
      <article key="id">
        <Link to={`/logement/${id}`}>
          <figure className="card">
            <img src={cover} alt={title} className="card-cover" />
            <figcaption className="card-body">
              <h2 className="card-title">{title}</h2>
            </figcaption>
          </figure>
        </Link>
      </article>
    );
  };
  
  export default Card;
