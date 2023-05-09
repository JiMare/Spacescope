const axios = require('axios');

const NASA_API_KEY = 'DEMO_KEY';

const NasaApiClient = axios.create({
  baseURL: 'https://api.nasa.gov',
  timeout: 1000,
  params: {
    api_key: NASA_API_KEY,
  },
});

export default NasaApiClient;
