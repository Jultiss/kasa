import React from "react";
import activeStar from "../assets/star-active.png";
import inactiveStar from "../assets/star-inactive.png";

function Rating({ rating }) {
    // Tableau fixe des numéros d'étoiles pour faciliter la génération des étoiles
    const stars = [1, 2, 3, 4, 5];

    // Fonction pour générer les étoiles en fonction de la note
    const renderStars = () => 
        stars.map(starNumber => {
            // Déterminer si l'étoile est active ou inactive en fonction de la note
            const imgSrc = rating >= starNumber ? activeStar : inactiveStar;
            return (
                // Rendre chaque étoile avec une image appropriée
                <img
                    key={starNumber}
                    className="star"
                    src={imgSrc}
                    alt="Rating star"
                />
            );
        });
    return (
        <div>
            {renderStars()}
        </div>
    );
}

export default Rating;