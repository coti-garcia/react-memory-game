import React from "react";

function Header() {
  return (
    <header>
      <h1>Memory Game</h1>
      <h2>You guessed: </h2>
      <div className="score">Scrore: | Top Score: </div>
    </header>
  );
}

export default Header;
