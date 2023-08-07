import React, { useState } from 'react';

function Carrousel({ logement }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % logement.pictures.length);
  };

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + logement.pictures.length) % logement.pictures.length);
  };

  return (
    <div className="carrousel">
      <button onClick={previousImage}>&lt;</button>
      <img src={logement.pictures[currentImage]} alt={logement.title} />
      <button onClick={nextImage}>&gt;</button>
    </div>
  );
}

export default Carrousel;
