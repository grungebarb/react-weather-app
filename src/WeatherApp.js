import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./WeatherApp.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000)
    })
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();

  }
  function search() {
    let apiKey = "b89a2bda363f782379e90e985a8aa5e3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleCityChange(event)  {
    setCity(event.target.value);

  }
  if (weatherData.ready) {
    return (
    <div className="WeatherApp weather-app">
      <div className="SearchSection search-section">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a city, please"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn search-btn px-4">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn search-btn px-4"
                title="Button not working yet"
              >
                <strong>Current</strong>
              </button>
            </div>
          </div>
        </form>
      </div>
      <WeatherInfo data={weatherData} />
      
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
    search();
  return "Loading...";
  }
  
  
}