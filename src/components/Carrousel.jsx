import React, { useState } from 'react';

function Carrousel({ logement }) {
    const [currentImage, setCurrentImage] = useState(0);

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        // Calcul de l'index de la prochaine image (modulaire pour boucler)
        const nextIdx = (currentImage + 1) % logement.pictures.length;
        setCurrentImage(nextIdx); // Mise à jour de l'image actuelle
    };

    // Fonction pour revenir à l'image précédente
    const previousImage = () => {
        // Calcul de l'index de l'image précédente (modulaire pour boucler)
        const prevIdx = (currentImage - 1 + logement.pictures.length) % logement.pictures.length;
        setCurrentImage(prevIdx); // Mise à jour de l'image actuelle
    };

    // Vérification du nombre d'images pour décider d'afficher les flèches
    const showArrows = logement.pictures.length > 1;

    return (
        // Conteneur principal du carrousel
        <section className="carrousel">
            {/* Conteneur pour l'image actuellement affichée */}
            <div className="carrousel-container">
                <img src={logement.pictures[currentImage]} alt={logement.title} />
            </div>
            {/* Navigation du carrousel : boutons précédent/suivant et compteur d'images */}
            <div className="carrousel-nav">
                {/* Affichage conditionnel de la flèche précédente */}
                {showArrows && (
                    <button onClick={previousImage}>&lt;</button>
                )}
                <span className="carrousel-counter">
                    {currentImage + 1} / {logement.pictures.length}
                </span>
                {/* Affichage conditionnel de la flèche suivante */}
                {showArrows && (
                    <button onClick={nextImage}>&gt;</button>
                )}
            </div>
        </section>
    );
}

export default Carrousel;
