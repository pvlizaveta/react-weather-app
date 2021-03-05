import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />

        <footer>
          <a href="https://github.com/pvlizaveta/react-weather-app">
            Open-source code
          </a>
          &nbsp; by Lizaveta Pauliushchyk
        </footer>
      </div>
    </div>
  );
}
