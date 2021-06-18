import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecast.city.name) {
    let sunriseHour = (new Date(forecast.city.sunrise * 1000)).getHours();
    if (sunriseHour < 10) {
      sunriseHour = `0${sunriseHour}`;
    }
    let sunriseMinute = (new Date(forecast.city.sunrise * 1000)).getMinutes();
    if (sunriseMinute < 10) {
      sunriseMinute = `0${sunriseMinute}`;
    }
    let sunsetHour = (new Date(forecast.city.sunset * 1000)).getHours();
    if (sunsetHour < 10) {
      sunsetHour = `0${sunsetHour}`;
    }
    let sunsetMinute = (new Date(forecast.city.sunset * 1000)).getMinutes();
    if (sunsetMinute < 10) {
      sunsetMinute = `0${sunsetMinute}`;
    }
    let sunrise = `${sunriseHour}:${sunriseMinute}h`;
    let sunset = `${sunsetHour}:${sunsetMinute}h`;
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.list.slice(0,16).map(function (forecastItem) {return <WeatherForecastPreview data={forecastItem} />})}
        </div>
        <div className="row sun-appearence">
          <div className="col sunrise">
            <img src="./icons/sunrise.png" alt="🌄" />
            <strong>Sunrise:</strong> {sunrise}
          </div>
          <div className="col sunset">
            <img src="./icons/sunset.png" alt="🌇" />
            <strong>Sunset:</strong> {sunset}
          </div>
        </div>
      </div>
      );
  } else {
    let apiKey = "b89a2bda363f782379e90e985a8aa5e3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
  
}
