import React, { useState } from "react";
import SearchSection from "./SearchSection";
import CityInfo from "./CityInfo";
import "./WeatherApp.css";
import icon from "./icon_01d.png";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name
    })
  }
  if (weatherData.ready) {
    return (
    <div className="WeatherApp weather-app">
      <SearchSection />
      <CityInfo />
      <div className="row acurate-data-section">
        <div className="col-3">
          <img src={icon} alt="" className="current-icon" />
        </div>
        <div className="col-4">
          <strong className="current-temperature">{Math.round(weatherData.temperature)}ºC</strong>
        </div>
        <div className="col-5 mt-3">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind speed: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-8 units-conversion">
          Do you want to see it on ºF?
        </div>
        <div className="col-4">
          <button type="button" className="btn units-btn">
            <strong>YES!</strong>
          </button>
        </div>
      </div>
    </div>
  );
  } else {
    let apiKey = "b89a2bda363f782379e90e985a8aa5e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading...";
  }
  
  
}