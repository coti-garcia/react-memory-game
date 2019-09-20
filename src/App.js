import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Instructions from "./components/Instructions/instructions";
import GridImages from "./components/GridImages/gridimage";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Instructions />
      <GridImages />
      <Footer />
    </div>
  );
}

export default App;
