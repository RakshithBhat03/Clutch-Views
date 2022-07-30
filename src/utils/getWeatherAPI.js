export const getWeatherAPI = (coordinates) => {
  return coordinates.latitude && coordinates.longitude
    ? `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    : `https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
};
