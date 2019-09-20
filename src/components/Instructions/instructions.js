import React from "react";
import "./instructions.scss";

function Instructions() {
  return (
    <div className="Instructions">
      <div className="jumbotron">
        <h1 className="display-4">Memory Game!</h1>
        <p className="lead">
          Click on an image to earn points, but don't click on any more than
          once!
        </p>
      </div>
    </div>
  );
}

export default Instructions;
