import React from "react";
import ImageCard from "../ImageCard/imageCard";

function GridImages() {
  return (
    <div className="container">
      <div className="row">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
}

export default GridImages;
