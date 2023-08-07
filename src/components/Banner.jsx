import image from '../assets/ImageSection.png'
import '../styles/Banner.scss'

function Banner () {

    return (
        <section>
            <div className='banner'>
                <img src={image} alt="vue d'une côte sauvage au bord de l'océan" />
                <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
            </div>
        </section>
    );
    }

    export default Banner;