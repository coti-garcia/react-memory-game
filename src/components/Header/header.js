import React from "react";
import "./header.scss";

function Header(props) {
  return (
    <header class="Header">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>Memory Game</h1>
          </div>
          <div className="col-4">{props.text}</div>
          <div className="col-4">
            <div className="score">
              Score: {props.score}| Top Score: {props.topScore}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
