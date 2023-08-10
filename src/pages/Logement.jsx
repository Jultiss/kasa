import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Collapsible from "../components/Collapsible";

import logements from "../data/logements";

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = logements.find(log => log.id === id);

    useEffect(() => {
        if (!logement) {
            navigate("/page-non-trouvee", { replace: true });
        }
    }, [logement, navigate]);

    if (!logement) {
        return null;
    }

    return (
        <div>
            <Carrousel logement={logement} />
            <LogementHostSection logement={logement} />
            <TagsAndRatingSection logement={logement} />
            <CollapsibleSection logement={logement} />
        </div>
    );
}

function LogementHostSection({ logement }) {
    return (
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
    );
}

function TagsAndRatingSection({ logement }) {
    return (
        <div className="tags-rating">
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

function CollapsibleSection({ logement }) {
    return (
        <div className="logement-collapsible">
            <Collapsible title="Description" content={logement.description} />
            <Collapsible title="Équipements" content={logement.equipments} />
        </div>
    );
}

export default Logement;
