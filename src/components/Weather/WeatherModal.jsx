import "./WeatherModal.css";
function WeatherModal({ temperature, setShowModal }) {
  const {
    city_name,
    description,
    icon,
    temp,
    temp_max,
    temp_min,
    humidity,
    feels_like,
  } = temperature;
  return (
    <div className="weather-modal-wrapper p-9 mr-9">
      <p className="weather-city-modal">{city_name}</p>
      <p className="weather-desription-modal">{description}</p>
      <div className="weather-temperature-modal">
        <img
          className="weather-icon-modal"
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="weather"
        />
        <p className="city-temperature-modal">{`${temp}°`}</p>
      </div>
      <div className="min-max-temperature">
        <p className="temperature-info">Max: {temp_max}°</p>
        <p className="temperature-info">Min: {temp_min}°</p>
      </div>
      <div className="temperature-additional-info">
        <p className="temperature-info">Humidity: {humidity}</p>
        <p className="temperature-info">Feels like: {feels_like}°</p>
      </div>
      <button
        className="modal-close-btn mr-9 mt-9"
        onClick={() => setShowModal((state) => !state)}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

export { WeatherModal };
