import weatherAPI from './services/weather_api';
import DOM from './dom';
import geolocationAPI from './services/geolocation_api';

const form = document.querySelector('form');

const init = async () => {
  const guessedCity = await geolocationAPI.query();
  const defaultWeatherInfo = await weatherAPI.query(guessedCity);

  if (defaultWeatherInfo) {
    DOM.updateWeatherInfo(defaultWeatherInfo);
  } else {
    DOM.error(guessedCity);
  }
};


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const param = document.querySelector('#query').value;
  const weatherInfo = await weatherAPI.query(param);

  if (weatherInfo) {
    DOM.updateWeatherInfo(weatherInfo);
  } else {
    DOM.error(param);
  }
});

init();
