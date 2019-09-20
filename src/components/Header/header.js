import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>Memory Game</h1>
          </div>
          <div className="col-4">
            <h2>You guessed: </h2>
          </div>
          <div className="col-4">
            <div className="score">Scrore: | Top Score: </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
