import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>Charlotte, NC</h1>
      <h4>Friday 3:00pm</h4>
      <h5>Sunny</h5>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          18º
        </div>
      </div>
      <div className="Temp">
        <ul>
          <li>Precipitation: 15%</li>
          <li>Humidity: 50%</li>
          <li>Wind: 10km/h</li>
        </ul>
      </div>
      <ul className="Cities">
        <li className="City">Tokyo</li>
        <li className="City">Madrid</li>
        <li className="City">New York</li>
        <li className="City">San Francisco</li>
      </ul>
    </div>
  );
}
