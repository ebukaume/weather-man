/* eslint-env browser */
const fetchAPI = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};

export default fetchAPI;
