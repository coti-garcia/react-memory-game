import React from "react";
import "./imageCard.scss";

function ImageCard(props) {
  return (
    <div className="col-3 ImageCard">
      <img
        src={props.src}
        alt={props.alt}
        className="img-thumbnail"
        onClick={() => props.clickCard(props.id)}
      />
    </div>
  );
}

export default ImageCard;
