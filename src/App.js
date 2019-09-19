import React from "react";
import "./App.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import GridImages from "./components/GridImages";
import Footer from "./components/Footer";

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
