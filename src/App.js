import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Instructions from "./components/Instructions/instructions";
import ImageCard from "../ImageCard/imageCard";
import Footer from "./components/Footer/footer";

class App extends React.Component {
  state = {
    begin: false,
    score: 0,
    topScore: 0,
    guess: false,
    images: []
  };

  scoreFeedback = () => {
    let text;
    if (this.state.begin) {
      if (this.state.guess) {
        text = "You guessed correctly!";
      } else {
        text = "You guessed incorrectly!";
      }
    } else {
      text = "Click an image to begin!";
    }
    console.log(text);
    return text;
  };

  render() {
    return (
      <div className="App">
        <Header
          text={this.scoreFeedback()}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Instructions />
        <div className="container">
          <div className="row"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
