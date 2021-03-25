import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Wednsday May, 26",
      time: "20:00",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
      condition: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
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
            <h1 className="mainCity">{weatherData.city}</h1>
            <h3 className="state">NC</h3>
            <h1 className="temperature">
              {Math.round(weatherData.temperature)}º
            </h1>
            <h5 className="units">
              <a href=" ">C</a>|<a href=" ">F</a>
            </h5>
            <h3 className="time">{weatherData.time}</h3>
            <h4>{weatherData.date}</h4>
          </div>
          <div className="vl"></div>
          <div className="column right">
            <img
              className="sunny"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny
            "
            />
            <h5 className="text-capitalize">{weatherData.condition}</h5>
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
                <li>Feels like: {Math.round(weatherData.feelsLike)}º</li>
                <hr></hr>
                <li>Humidity: {weatherData.humidity}%</li>
                <hr></hr>
                <li>Wind: {Math.round(weatherData.windSpeed)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "873778ec9745d16fa6e7696c40362dfa";
    let city = "Charlotte";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang={en}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
