import React from "react";
import FormattedDate from "./FormattedDate";
import icon from "./icons/icon_01d.png";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="CityInfo city-info">
        <h1>{props.data.city}</h1>
        <ul>
          <li>Last update: <FormattedDate date={props.data.date} /></li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row acurate-data-section">
        <div className="col-3">
          <img src={icon} alt="" className="current-icon" />
        </div>
        <div className="col-4">
          <strong className="current-temperature">{Math.round(props.data.temperature)}ºC</strong>
        </div>
        <div className="col-5 mt-3">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}