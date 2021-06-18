
import './App.css';
import WeatherApp from './WeatherApp';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <WeatherApp defaultCity="Valladolid" />
          <small>
            <a
              href="https://github.com/grungebarb/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by GrungeBarb (Bárbara Llansó Di Renzo)
          </small>
        </div>
      </div>
    </div>
  );
}
