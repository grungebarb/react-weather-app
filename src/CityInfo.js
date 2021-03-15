import React from "react";

export default function CityInfo() {
  let cityData = {
    city: "Las Matas",
    date: "February 13, 10:00h",
    description: "Clear Sky"
  };
  return (
    <div className="CityInfo city-info">
      <h1>{cityData.city}</h1>
      <ul>
        <li>Last update: {cityData.date}</li>
        <li>{cityData.description}</li>
      </ul>
    </div>
  );
}