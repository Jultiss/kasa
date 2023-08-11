import React, { useState } from "react";

function Collapsible({ title, content }) {
    // Utilisation du hook useState pour gérer l'état ouvert/fermé du contenu repliable
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état ouvert/fermé
    const handleToggle = () => setIsOpen(prevState => !prevState);
    
    // Fonction pour rendre le contenu : si le contenu est un tableau, il est rendu comme une liste, sinon comme un paragraphe
    const renderContent = () => {
        if (Array.isArray(content)) {
            return (
                <ul>
                    {content.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            );
        }
        return <p>{content}</p>;
    };

    return (
        // Conteneur principal pour le composant repliable
        <div className="collapsible">
            {/* En-tête du contenu repliable, qui peut être cliqué pour basculer l'état ouvert/fermé */}
            <div className="collapsible-header" onClick={handleToggle}>
                <h3>{title}</h3>
                {/* Icône de flèche qui change en fonction de l'état ouvert/fermé */}
                <span className={`arrow ${isOpen ? "open" : "closed"}`}></span>
            </div>
            {/* Contenu repliable, seulement affiché si l'état est "ouvert" */}
            {isOpen && <div className="collapse-content">{renderContent()}</div>}
        </div>
    );
}

export default Collapsible;
