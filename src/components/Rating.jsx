import React from "react";
import activeStar from "../assets/star-active.png";
import inactiveStar from "../assets/star-inactive.png";

function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5];

    const renderStars = () => 
        stars.map(starNumber => {
            const imgSrc = rating >= starNumber ? activeStar : inactiveStar;
            return (
                <img
                    key={starNumber}
                    className="star"
                    src={imgSrc}
                    alt="Rating star"
                />
            );
        });

    return (
        <div>
            {renderStars()}
        </div>
    );
}

export default Rating;