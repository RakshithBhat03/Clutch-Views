import { APIKEY } from "../constants/constants";
export const getWeatherAPI = (coordinates) => {
  return coordinates.latitude && coordinates.longitude
    ? `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&appid=${APIKEY}`
    : `https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=${APIKEY}`;
};
