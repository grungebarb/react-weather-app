
import './App.css';
import WeatherApp from './WeatherApp';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <WeatherApp />
          <small>
            <a
              href="https://github.com/grungebarb/my-weather-react-app"
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
