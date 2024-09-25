// App.js
import React from "react";
import "./App.js";
import './button.css'

function App() {
  // Funktion zum Handhaben von Klick-Ereignissen
  const handleClick = (buttonName) => {
    alert(`Button ${buttonName} wurde geklickt!`);
  };

  return (
    <div className="App">
      <h1>Meine Buttons</h1>
      <button 
        className="button" 
        onClick={() => handleClick("1")}
      >
        Button 1
      </button>
      <button 
        className="button button-second" 
        onClick={() => handleClick("2")}
      >
        Button 2
      </button>
    </div>
  );
}

export default App;
