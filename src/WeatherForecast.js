import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecastData);
    return (
      <div className="WeatherForecast">
        <div className="Wf">
          <div className="row">
            {forecastData.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col forecast" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "873778ec9745d16fa6e7696c40362dfa";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
