import React from "react";

function ImageCard(props) {
  return (
    <div className="col-3">
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
