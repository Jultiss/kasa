import React, { useState } from 'react';
import '../styles/Carrousel.scss';

function Carrousel({ logement }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        const nextIdx = (currentImage + 1) % logement.pictures.length;
        setCurrentImage(nextIdx);
    };

    const previousImage = () => {
        const prevIdx = (currentImage - 1 + logement.pictures.length) % logement.pictures.length;
        setCurrentImage(prevIdx);
    };

    return (
        <section className="carrousel">
            <div className="carrousel-container">
                <img src={logement.pictures[currentImage]} alt={logement.title} />
            </div>
            <div className="carrousel-nav">
                <button onClick={previousImage}>&lt;</button>
                <span className="carrousel-counter">
                    {currentImage + 1} / {logement.pictures.length}
                </span>
                <button onClick={nextImage}>&gt;</button>
            </div>
        </section>
    );
}

export default Carrousel;
