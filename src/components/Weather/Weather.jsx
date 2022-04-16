import { useEffect, useState } from "react";
import axios from "axios";
import { DEFAULT_TEMPERATURE } from "../../constants/constants";
import { setTemperatureData } from "../../utils/setTemperatureData";
import "./Weather.css";
import "./loader.css";
import { WeatherModal } from "./WeatherModal";
import { getWeatherAPI } from "../../utils/getWeatherAPI";
function Weather() {
  const [temperature, setTemperature] = useState(DEFAULT_TEMPERATURE);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getGeolocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWeatherDetails = async (coordinates = undefined) => {
    const apiLink = getWeatherAPI(coordinates);
    try {
      const tempData = await axios.get(apiLink);
      setTemperature(() => setTemperatureData(tempData));
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const getCoordinates = (pos) => {
    const coordinates = pos.coords;
    getWeatherDetails(coordinates);
  };

  const err = () => {
    getWeatherDetails("Error");
  };

  const getGeolocation = () =>
    navigator.geolocation.getCurrentPosition(getCoordinates, err);

  return (
    <>
      <div
        className="weather-wrapper mr-9 mt-9"
        onClick={() => setShowModal((state) => !state)}>
        {loading && <div className="loader"></div>}

        {!error && !loading && (
          <div className="weather-temp-wrapper">
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${temperature.icon}.png`}
              alt="weather"
            />
            <p className="city-temperature">{`${temperature.temp}°C`}</p>{" "}
          </div>
        )}
        {error && <p>{error}</p>}

        <p className="weather-city">{temperature.city_name}</p>
      </div>
      {showModal && (
        <WeatherModal temperature={temperature} setShowModal={setShowModal} />
      )}
    </>
  );
}

export { Weather };
