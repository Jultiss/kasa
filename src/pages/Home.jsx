import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';
import data from '../data/logements';
import BannerHome from '../assets/BannerHome.png';

function Home() {
    return (
        <div>
            {/* Affichage de la bannière avec son image et son titre */}
            <Banner
                bannerImg={BannerHome}
                bannerTitle="Chez vous, partout et ailleurs"
                page="home"
            />

            {/* Affichage de la liste des logements */}
            <div className="logements">
                {/* Pour chaque logement dans les données, on affiche une carte */}
                {data.map(logement => (
                    <Card logement={logement} key={logement.id} />
                ))}
            </div>
        </div>
    );
}
export default Home;