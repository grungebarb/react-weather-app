import React from "react";
import "./WeatherForecastPreview.css";
export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}ºC`;
  }
  return (
    <div className="col WeatherForecastPreview">
      {hours()}
      <img src={`./icons/icon_${props.data.weather[0].icon}.png`} alt={props.data.description} className="forecast-icon" />
      {temperature()}
    </div>
  )
}