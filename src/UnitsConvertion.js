import React, { useState } from "react";
import "./UnitsConvertion.css";

export default function UnitsConvertion(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");

  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");

  }
  if (unit === "celsius") {
    return (
    <div className="col-4 UnitsConvertion">
      <span className="current-temperature">{Math.round(props.celsius)}</span>
      <span className="units-change">ºC | <a href="/" onClick={showFahrenheit}>ºF</a></span>
    </div>
  );
} else {
  let fahrenheit = (props.celsius * 9) / 5 + 32;
  return (
    <div className="col-4 UnitsConvertion">
      <span className="current-temperature">{Math.round(fahrenheit)}</span>
      <span className="units-change"><a href="/" onClick={showCelsius}>ºC</a> | ºF</span>
    </div>
  );
}
}