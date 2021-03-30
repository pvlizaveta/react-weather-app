import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
//import Forms from "./Forms";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
      condition: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
    });
  }
  function search() {
    const apiKey = "873778ec9745d16fa6e7696c40362dfa";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang={en}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
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
            <h1 className="temperature">
              {Math.round(weatherData.temperature)}º
            </h1>
            <h5 className="units">
              <a href=" ">C</a>|<a href=" ">F</a>
            </h5>
            <h3 className="time">
              <FormattedTime date={weatherData.time} />
            </h3>
            <h4>
              <FormattedDate date={weatherData.date} />
            </h4>
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
            <div className="Forms">
              <form onSubmit={handleSubmit}>
                <div className="Searching">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Enter a city"
                      className="form-control"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>

                  <div className="col-4">
                    <input
                      type="submit"
                      className="btn btn-primary w-100"
                      value="Search"
                    />
                  </div>
                </div>
              </form>
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
    search();
    return "Loading..";
  }
}
