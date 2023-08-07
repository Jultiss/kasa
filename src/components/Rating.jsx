import React from "react";
import inactiveStar from "../assets/star-inactive.png";
import activeStar from "../assets/star-active.png";

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((starNumber) =>
        rating >= starNumber ? (
          <img
            key={starNumber.toString()}
            className="star"
            src={activeStar}
            alt="Rating star"
          />
        ) : (
          <img
            key={starNumber.toString()}
            className="star"
            src={inactiveStar}
            alt="Rating star"
          />
        )
      )}
    </div>
  );
}

export default Rating;