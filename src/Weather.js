import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="column left">
          <ul className="Cities">
            <li className="City">
              <a href=" ">Tokyo</a>
            </li>
            <li className="City">
              <a href=" ">Madrid</a>
            </li>
            <li className="City">
              <a href=" ">New York</a>
            </li>
            <li className="City">
              <a href=" ">San Francisco</a>
            </li>
          </ul>
          <h1 className="mainCity">Charlotte</h1>
          <h3 className="state">NC</h3>
          <h1 className="temperature">17º</h1>
          <h5 className="units">
            <a href=" ">C</a>|<a href=" ">F</a>
          </h5>
          <h3 className="time">3:00pm</h3>
          <h4>Friday, May 13,2021</h4>
        </div>
        <div class="vl"></div>
        <div className="column right">
          <img
            className="sunny"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny
            "
          />
          <h5 className="condition">Sunny</h5>
          <hr></hr>
          <div className="Searching">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-4">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="Search"
              ></input>
            </div>
          </div>
          <div className="Temp">
            <ul className="discription">
              <li>Feels like: 20º</li>
              <hr></hr>
              <li>Humidity: 50%</li>
              <hr></hr>
              <li>Wind: 10km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
