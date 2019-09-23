import React from "react";
import "./header.scss";

function Header(props) {
  return (
    <header class="Header">
      <div className="container">
        <div className="row">
          <div className="col-6">{props.text}</div>
          <div className="col-6">
            <div className="score">
              <strong>Score:</strong> {props.score}
              <span>|</span>
              <strong>Top Score:</strong>
              {props.topScore}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
