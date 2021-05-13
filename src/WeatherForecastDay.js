import React from "react";
import { WeatherIcon } from "weather-react-icons";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
  return (
    <div className="forecastD">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon
        className="forecastIcon"
        iconId={props.data.weather[0].id}
        name="owm"
      />
      <div className="forecast-temp">
        <span className="forecast-temp-max">{maxTemp()} </span>
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
