const axios = require('axios');

const NASA_API_KEY = 'DEMO_KEY';

export const NasaApiClient = axios.create({
  baseURL: 'https://api.nasa.gov',
  timeout: 3000,
  params: {
    api_key: NASA_API_KEY,
  },
});

export const NasaImgeApiClient = axios.create({
  baseURL: 'https://images-api.nasa.gov',
  timeout: 3000,
});
