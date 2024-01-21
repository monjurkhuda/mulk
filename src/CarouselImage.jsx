import React from "react";
import "./CarouselImage.css";

function CarouselImage({ randNum }) {
  return (
    <div>
      {randNum === 1 && (
        <img
          className="carousel_image"
          alt="carousel_inmage"
          src={require("../src/images/army_general.jpg")}
        ></img>
      )}
      {randNum === 2 && (
        <img
          className="carousel_image"
          alt="carousel_inmage"
          src={require("../src/images/navy_admiral1.jpg")}
        ></img>
      )}
      {randNum === 3 && (
        <img
          className="carousel_image"
          alt="carousel_inmage"
          src={require("../src/images/womens_rights_activist.jpg")}
        ></img>
      )}
      {randNum === 4 && (
        <img
          className="carousel_image"
          alt="carousel_inmage"
          src={require("../src/images/economics_expert.jpg")}
        ></img>
      )}
      {randNum === 5 && (
        <img
          className="carousel_image"
          alt="carousel_inmage"
          src={require("../src/images/literature_expert.jpg")}
        ></img>
      )}
    </div>
  );
}

export default CarouselImage;
