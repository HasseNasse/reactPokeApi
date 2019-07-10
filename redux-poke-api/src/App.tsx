import React from "react";
import "./App.css";
import Pokémons from "./components/Pokémons";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PokéApi (Redux)</h1>
      </header>
      <Pokémons />
    </div>
  );
};

export default App;
