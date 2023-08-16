import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Collapsible from "../components/Collapsible";
import logements from "../data/logements";

function Logement() {
    // Récupération de l'ID du logement depuis l'URL
    const { id } = useParams();
    // Hook pour naviguer entre les routes
    const navigate = useNavigate();
    // Trouver le logement correspondant à l'ID
    const logement = logements.find(log => log.id === id);

    // Effet pour vérifier si le logement existe
    useEffect(() => {
        // Si le logement n'existe pas, rediriger vers une page d'erreur (404)
        if (!logement) {
            navigate("/page-non-trouvee", { replace: true });
        }
    }, [logement, navigate]);

    // Si le logement n'existe pas, ne rien afficher : évite d'éventuelles erreurs JavaScript 
    //  en essayant de lire les propriétés d'un objet logement qui serait undefined ou null.
    if (!logement) {
        return null;
    }

    return (
        <div>
            <Carrousel logement={logement} />
            <LogementInfos logement={logement} />
            <CollapsibleSection logement={logement} />
        </div>
    );
}

// Section affichant infos, les tags et la note du logement
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

// Section affichant des informations dépliables du logement
function CollapsibleSection({ logement }) {
    return (
        <div className="logement-collapsible">
            <Collapsible title="Description" content={logement.description} />
            <Collapsible title="Équipements" content={logement.equipments} />
        </div>
    );
}

export default Logement;
