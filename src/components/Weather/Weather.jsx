import { useEffect, useState } from "react";
import axios from "axios";
import { APIKEY, DEFAULT_TEMPERATURE } from "../../constants/constants";
import { setTemperatureData } from "../../utils/setTemperatureData";
import "./Weather.css";
function Weather() {
  const [temperature, setTemperature] = useState(DEFAULT_TEMPERATURE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const tempData = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=${APIKEY}`
        );
        setTemperature(() => setTemperatureData(tempData));
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    })();
  }, []);
  return (
    <div className="weather-wrapper mr-9 mt-9">
      {loading && <p>Loading...</p>}

      {!error && !loading && (
        <div className="weather-temp-wrapper">
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${temperature.icon}.png`}
            alt="weather"></img>
          <p className="city-temperature">{`${temperature.temp}°C`}</p>{" "}
        </div>
      )}
      {error && <p>{error}</p>}

      <p className="weather-city">{temperature.city_name}</p>
    </div>
  );
}

export { Weather };
