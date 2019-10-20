const DOM = (() => {
  const setWeatherImage = (weather) => {
    const imageKey = weather.toLowerCase();

    const IMAGE_SRC = {
      cloud: 'https://media2.giphy.com/media/3o7rc6sa2RvKo8K5EI/giphy.gif',
      snow: 'https://media3.giphy.com/media/Xi2Xu0MejhsUo/giphy.gif',
      thunder: 'https://media0.giphy.com/media/xaZCqV4weJwHu/giphy.gif',
      frost: 'https://media3.giphy.com/media/Xi2Xu0MejhsUo/giphy.gif',
      rain: 'https://media.giphy.com/media/Mgq7EMQUrhcvC/giphy.gif',
      fog: 'https://media0.giphy.com/media/KPtOFhewRGWl2/giphy.gif',
      wind: 'https://media0.giphy.com/media/8GBcEvtPS3ixi/giphy.gif',
      hail: 'https://media3.giphy.com/media/xTiTnGmU99wLFvZBfy/giphy.gif',
      clear: 'https://media3.giphy.com/media/3oz8xsTTDHL2D8Hluw/giphy.gif',
      sun: 'https://media0.giphy.com/media/13TM6acSU6sZFu/giphy.gif',
      mist: 'https://media1.giphy.com/media/McDhCoTyRyLiE/giphy.gif',
      extreme: 'https://media.giphy.com/media/xCpz28xnEPdDi/giphy.gif',
    };

    const key = Object.keys(IMAGE_SRC).filter((type) => imageKey.includes(type));

    const weatherImage = document.querySelector('#weather-image').firstElementChild;
    weatherImage.src = IMAGE_SRC[key];
  };

  const updateWeatherInfo = (data) => {
    const {
      country, city, weather, temp, datetime,
    } = data;
    const { day, hour, minute } = datetime;
    const { fahrenheit, celcius } = temp;

    const dayElement = document.querySelector('#day');
    const timeElement = document.querySelector('#time');
    const cityElement = document.querySelector('#city');
    const countryElement = document.querySelector('#country');
    const temperatureElement = document.querySelector('#temperature');
    const weatherElement = document.querySelector('#others');

    document.querySelector('#query').value = '';
    setWeatherImage(weather);
    cityElement.innerHTML = city;
    countryElement.innerHTML = country;
    dayElement.innerHTML = day;
    timeElement.innerHTML = `${hour} : ${minute}`;
    temperatureElement.innerHTML = `${fahrenheit}&deg;F | ${celcius}&deg;C`;
    weatherElement.innerHTML = weather;
  };

  const error = (city) => {
    // document.querySelector('#error').classList.remove('hidden');
    // eslint-disable-next-line no-alert
    alert(`Could not find data for ${city}!`);
  };

  return { updateWeatherInfo, error };
})();

export default DOM;
