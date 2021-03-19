import React from "react";
import SearchSection from "./SearchSection";
import CityInfo from "./CityInfo";
import "./WeatherApp.css";
import icon from "./icon_01d.png";

export default function Weather() {
  return (
    <div className="WeatherApp weather-app">
      <SearchSection />
      <CityInfo />
      <div className="row acurate-data-section">
        <div className="col-3">
          <img src={icon} alt="" className="current-icon" />
        </div>
        <div className="col-4">
          <strong className="current-temperature">13ºC</strong>
        </div>
        <div className="col-5 mt-3">
          <ul>
            <li>Humidity: 50%</li>
            <li>Wind speed: 23km/h</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-8 units-conversion">
          Do you want to see it on ºF?
        </div>
        <div className="col-4">
          <button type="button" class="btn units-btn">
            <strong>YES!</strong>
          </button>
        </div>
      </div>
    </div>
  );
}