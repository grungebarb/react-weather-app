import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./WeatherApp.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: `./icons/icon_${response.data.weather[0].icon}.png`
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
    <div className="WeatherApp">
      <div className="search-section">
        <form onSubmit={handleSubmit}>
          <div className="row search-form">
            <div className="col">
              <input
                type="search"
                placeholder="Enter a city, please"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col">
              <button type="submit" className="btn search-btn px-4">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </form>
      </div>
      <WeatherInfo data={weatherData} />
      <WeatherForecast city={weatherData.city}/>
      <small className="local-time">(Hours in user's local time)</small>
    </div>
  );
  } else {
    search();
  return "Loading...";
  }
  
  
}