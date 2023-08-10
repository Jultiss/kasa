import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';
import data from '../data/logements';
import '../styles/Home.scss';
import BannerHome from '../assets/BannerHome.png';

const Home = () => {
    return (
        <div>
            <Banner
                bannerImg={BannerHome}
                bannerTitle="Chez vous, partout et ailleurs"
                page="home"
            />

            <div className="logements">
                {data.map(logement => (
                    <Card logement={logement} key={logement.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;