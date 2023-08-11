import React from 'react';

function Banner({ bannerImg, bannerTitle, page }) {
  return (
    // Utilisation de la classe CSS "banner" combinée avec le nom de la page pour personnaliser le style
    <div className={`banner ${page}`}>
      {/* Image de la bannière avec source et texte alternatif passés en props */}
      <img src={bannerImg} alt={bannerTitle} />
      {/* Titre de la bannière, également passé en props */}
      <h1>{bannerTitle}</h1>
    </div>
  );
}

export default Banner;