import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            {/* Lien vers la page d'accueil */}
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default PageNotFound;
