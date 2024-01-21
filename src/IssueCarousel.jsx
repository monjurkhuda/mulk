import React from "react";
import "./IssueCarousel.css";
import CarouselImage from "./CarouselImage";

function IssueCarousel() {
  let randNum = Math.floor(Math.random() * 5 + 1);

  return (
    <div className="carousel_container">
      <CarouselImage randNum={randNum} />
      <div className="issue_message">The kuki chin have taken over.</div>
    </div>
  );
}

export default IssueCarousel;
