import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  state = {
    begin: false,
    score: 0,
    topScore: 0,
    guess: false
  };

  // scoreFeedback = () => {
  //   if (!this.state.begin) {
  //     <h2>Click an image to begin!</h2>;
  //   } else if (this.state.begin && !this.state.guess) {
  //     <h2>You guessed incorrectly!</h2>;
  //   } else if (this.state.begin && this.state.guess) {
  //     <h2>You guessed correctly!</h2>;
  //   }
  // };

  render() {
    return (
      <header class="Header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1>Memory Game</h1>
            </div>
            <div className="col-4">Pass score Function Here</div>
            <div className="col-4">
              <div className="score">Scrore: | Top Score: </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
