import axios from 'axios';

export const weatherAPI = {
  getWeatherInfo(lat, lon) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=181a732810f6935a9a2a9c41e53b0559`
    );
  },
};
