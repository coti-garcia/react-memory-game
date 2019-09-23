import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Instructions from "./components/Instructions/instructions";
import cards from "./cards.json";
import ImageCard from "./components/ImageCard/imageCard";
import Footer from "./components/Footer/footer";

class App extends React.Component {
  state = {
    begin: false,
    score: 0,
    topScore: 0,
    guess: false,
    currentId: 0,
    cards: cards
  };

  shuffle = array => {
    array.sort(() => Math.random() - 0.5);
    return array;
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
    return text;
  };

  clickCard = id => {
    let newScore = this.state.score + 1;
    console.log("Clicked ID: " + id);
    console.log("Current ID:" + this.state.currentId);
    let newCards = this.shuffle(cards);
    this.setState({
      begin: true,
      currentId: id,
      cards: newCards
    });

    if (this.state.currentId != id) {
      this.setState({
        score: newScore,
        guess: true,
        topScore: newScore
      });
    } else {
      this.setState({
        guess: false,
        topScore: newScore,
        score: 0
      });
    }
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
          <div className="row">
            {this.state.cards.map(element => (
              <ImageCard
                id={element.id}
                key={element.id}
                src={element.src}
                alt={element.alt}
                clickCard={this.clickCard}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
