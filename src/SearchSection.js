import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchSection(props) {
  const [city, setCity] = useState(props.defaultCity);
  function handleSubmit(event) {
    event.preventDefafult();

  }
  function handleCityChange(event)  {

  }
  return (
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
  );
}