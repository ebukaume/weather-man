const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const formatDatetime = (epoch) => {
  const datetime = new Date(epoch * 1000);
  const day = DAYS[datetime.getDay()];
  const hour = datetime.getHours();
  const minute = datetime.getMinutes();

  return {
    day,
    hour: hour < 10 ? `0${hour}` : hour,
    minute: minute < 10 ? `0${minute}` : minute,
  };
};

const kelvinToCelcius = temp => Math.ceil(temp - 273.15);

const kelvinToFahrenheit = temp => Math.ceil(1.8 * (temp - 273) + 32);


export { formatDatetime, kelvinToCelcius, kelvinToFahrenheit };
