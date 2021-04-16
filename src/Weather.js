import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
//import jQuery from "jQuery";
import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherIcon } from "weather-react-icons";
import Cities from "./Cities";
import Specifics from "./Specifics";
//import Image from "./Image";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    //console.log(response.data);
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
      icon: response.data.weather[0].id,
      timezone: response.data.timezone,
      visibility: response.data.clouds.all,
      country: response.data.sys.country,
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
  const [bgImg, setBgImg] = useState("");

  if (weatherData.condition === "clear sky") {
    setBgImg("./assets/clearsky.png");
  } else if (weatherData.condition === "few clouds") {
    setBgImg("./assets/few-clouds.png");
  } else if (weatherData.condition === "broken clouds") {
    setBgImg("./assets/broken-clouds.png");
  } else if (weatherData.condition === "mist") {
    setBgImg("./assets/mist.png");
  } else if (weatherData.condition === "rain") {
    setBgImg("./assets/rain.png");
  } else if (weatherData.condition === "scattered clouds") {
    setBgImg("./assets/scattered-clouds.png");
  } else if (weatherData.condition === "shower rain") {
    setBgImg("./assets/shower-rain.png");
  } else if (weatherData.condition === "snow") {
    setBgImg("./assets/snow.png");
  } else if (weatherData.condition === "thunder") {
    setBgImg("/assets/thunder.png");
  } else {
  }

  if (weatherData.ready) {
    return (
      <div className="wewer" style={{ backgroundImage: bgImg }}>
        <div className="row">
          <div className="column left">
            <Cities data={weatherData} />

            <h1 className="mainCity">
              {weatherData.city}, {weatherData.country}
            </h1>
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
            <WeatherIcon
              className="icon"
              iconId={weatherData.icon}
              name="owm"
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
              <Specifics data={weatherData} />
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
