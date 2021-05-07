import React from "react";

export default function Specifics(props) {
  return (
    <div className="Specifics">
      <ul className="specifications">
        <li>Feels like: {Math.round(props.data.feelsLike)}º</li>
        <hr className="hr"></hr>
        <li>Humidity: {props.data.humidity}%</li>
        <hr className="hr"></hr>
        <li>Wind: {Math.round(props.data.windSpeed)}km/h</li>
        <hr className="hr"></hr>
        <li>Cloudiness: {props.data.visibility}%</li>
      </ul>
    </div>
  );
}
