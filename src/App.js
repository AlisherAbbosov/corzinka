import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
