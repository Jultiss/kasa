import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import LogementInfos from "../components/LogementInfos";
import CollapsibleSection from "../components/CollapsibleSection";
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

export default Logement;
