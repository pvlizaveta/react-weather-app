import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
//import jQuery from "jQuery";
import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherIcon } from "weather-react-icons";
import Specifics from "./Specifics";
import WeatherTemperature from "./WeatherTemperature";

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
      icon: response.data.weather[0].id,
      timezone: response.data.timezone,
      visibility: response.data.clouds.all,
      country: response.data.sys.country,
      bgImg: getBackgroundImage(response.data.weather[0].description),
    });
  }
  function search() {
    const apiKey = "873778ec9745d16fa6e7696c40362dfa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang={en}`;
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

  function getBackgroundImage(description) {
    let bgImg = "";
    if (description === "clear sky") {
      bgImg = "./assets/clearsky.png";
    } else if (description === "few clouds") {
      bgImg = "./assets/few-clouds.png";
    } else if (description === "broken clouds") {
      bgImg = "./assets/broken-clouds.png";
    } else if (description === "scattered clouds") {
      bgImg = "./assets/scattered-clouds.png";
    } else if (description === "overcast clouds") {
      bgImg = "./assets/overcast-clouds.png";
    } else if (description === "mist") {
      bgImg = "./assets/mist.png";
    } else if (description === "rain" || "moderate rain") {
      bgImg = "./assets/rain-rain.png";
    } else if (description === "shower rain") {
      bgImg = "./assets/shower-rain.png";
    } else if (description === "snow") {
      bgImg = "./assets/snow.png";
    } else if (description === "thunder") {
      bgImg = "./assets/thunder.png";
    } else {
    }
    return bgImg;
  }

  if (weatherData.ready) {
    return (
      <div
        className="wewer"
        style={{ backgroundImage: `url("${weatherData.bgImg}"` }}
      >
        <div className="row">
          <div className="column left">
            <h1 className="mainCity">
              {weatherData.city}, {weatherData.country}
            </h1>
            <div>
              <WeatherTemperature celsius={weatherData.temperature} />
            </div>
            <h4 className="time">
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
                      className="EnterACity"
                      type="search"
                      placeholder="  Enter a city"
                      autoFocus="on"
                      autoComplete="off"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-4">
                    <input
                      type="submit"
                      className="SubmitButton"
                      value="Search"
                      size="10"
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
