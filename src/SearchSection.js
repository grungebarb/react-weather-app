import React from "react";


export default function SearchSection() {
  return (
    <div className="SearchSection search-section">
      <form>
        <div className="row">
          <div className="col-7">
            <input
              type="search"
              placeholder="Enter a city, please"
              className="form-control"
              autoComplete="off"
              autoFocus
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn search-btn px-4">
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