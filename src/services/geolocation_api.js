import fetchAPI from './fetch_api';

const geolocationAPI = (() => {
  const ENDPOINT = 'http://ip-api.com/json/';

  const query = async () => {
    const payload = await fetchAPI(ENDPOINT);

    return payload ? payload.city : false;
  };

  return { query };
})();

export default geolocationAPI;
