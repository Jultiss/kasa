import React from "react";
import Banner from "../components/Banner";
import Collapsible from "../components/Collapsible";

import BannerAPropos from "../assets/BannerAPropos.png";

// Tableau de données contenant les sections à propos, avec leur titre et contenu
const aboutSections = [
    {
        title: "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        title: "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
];

function APropos() {
    return (
        <div>
            {/* Composant d'affichage de la bannière avec l'image et la page associée */}
            <Banner bannerImg={BannerAPropos} page="about" />

            {/* Section qui contient des éléments repliables (Collapsible) */}
            <section className="about-collapsible">
                {/* Boucle sur chaque section du tableau et rend un composant repliable */}
                {aboutSections.map((section, index) => (
                    <Collapsible
                        key={index}
                        title={section.title}
                        content={section.content}
                    />
                ))}
            </section>
        </div>
    );
}

export default APropos;