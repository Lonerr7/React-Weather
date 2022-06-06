import axios from 'axios';
import { SevenDaysResponse, WeatherInfo } from '../types/types';

const apiKey = '181a732810f6935a9a2a9c41e53b0559';

export const weatherAPI = {
  getWeatherInfo(lat: number, lon: number) {
    return axios.get<WeatherInfo>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${apiKey}`
    );
  },

  get7DayWeatherInfo(lat: number, lon: number) {
    return axios.get<SevenDaysResponse>(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&lang=ru&units=metric&appid=${apiKey}`
    );
  },
};
