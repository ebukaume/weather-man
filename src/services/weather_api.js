import fetchAPI from './fetch_api';
import { kelvinToFahrenheit, kelvinToCelcius, formatDatetime } from '../util';
import keys from '../../.keys.config';

const weatherAPI = (() => {
  const BASE_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = keys.WEATHER_API_KEY;

  const parseWeatherData = (data) => {
    const { country } = data.sys;
    const { name: city, wind } = data;
    const { humidity, temp: kelvin } = data.main;
    const temp = {
      fahrenheit: kelvinToFahrenheit(kelvin),
      celcius: kelvinToCelcius(kelvin),
    };
    const weather = data.weather[0].main;
    const datetime = formatDatetime(data.dt);

    return {
      country,
      city,
      weather,
      temp,
      humidity,
      wind,
      datetime,
    };
  };

  const query = async (city) => {
    const url = `${BASE_ENDPOINT}?q=${city.toUpperCase()}&APPID=${API_KEY}`;
    const data = await fetchAPI(url);
    if (data && data.cod === '404') return false;
    return parseWeatherData(data);
  };

  return {
    query,
  };
})();

export default weatherAPI;
