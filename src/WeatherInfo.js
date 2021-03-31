import React from "react";
import FormattedDate from "./FormattedDate";
import UnitsConvertion from "./UnitsConvertion";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-info">
        <h1>{props.data.city}</h1>
        <ul>
          <li>Last update: <FormattedDate date={props.data.date} />h</li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row acurate-data-section">
        <div className="col-3">
          <img src={props.data.iconUrl} alt={props.data.description} className="current-icon" />
        </div>
        <UnitsConvertion celsius={props.data.temperature}/>
        <div className="col-5 mt-3">
          <ul>
            <li><strong>Humidity:</strong> {props.data.humidity}%</li>
            <li><strong>Wind speed:</strong> {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}