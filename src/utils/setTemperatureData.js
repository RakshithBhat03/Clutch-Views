export const setTemperatureData = (tempData) => {
  return {
    city_name: tempData.data.name,
    description: tempData.data.weather[0].description,
    feels_like: tempData.data.main.feels_like,
    humidity: tempData.data.main.humidity,
    icon: tempData.data.weather[0].icon,
    temp_max: Math.ceil(tempData.data.main.temp_max),
    temp_min: Math.ceil(tempData.data.main.temp_min),
    temp: Math.ceil(tempData.data.main.temp),
  };
};
