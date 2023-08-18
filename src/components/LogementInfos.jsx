import React from "react";  
import Rating from "./Rating";

// Fonction affichant infos, les tags et la note du logement
function LogementInfos({ logement }) {
    return (
        <div className="logement-infos">
            <div className="logement">
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
            </div>
            <div className="host">
                <h3>{logement.host.name}</h3>
                <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className="tags">
                {logement.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
            <div className="rating">
                <Rating rating={logement.rating} />
            </div>
        </div>
    );
}

export default LogementInfos;