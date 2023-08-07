import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import logements from "../data/logements";
import Rating from "../components/Rating";


function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    navigate("/page-non-trouvee", { replace: true });
    return null;
  }
  return (
    <div>
      <Carrousel logement={logement} />
      <div className="logement-host">
        <div className="logement">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>
        <div className="host">
          <h3>{logement.host.name}</h3>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
      <div className="tags-rating">
        <div className="tags">
          {logement.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="rating">
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="description-equipements">
        <div className="description">
          <p>{logement.description}</p>
        </div>
        <div className="equipments">
          <p>
            <strong>Equipements :</strong> {logement.equipments.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Logement;