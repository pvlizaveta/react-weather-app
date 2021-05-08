import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Charlotte" />
        <footer>
          <a
            className="footer"
            href="http://github.com/pvlizaveta/react-weather-app"
          >
            Open-source code
          </a>
          &nbsp;by Lizaveta Pauliushchyk
        </footer>
      </div>
    </div>
  );
}
