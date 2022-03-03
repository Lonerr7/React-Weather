import { weatherAPI } from '../api/api';
import { citiesFn } from '../cities/cities';
import { get5DayWeather } from './weeklyWeatherReducer';

const CHANGE_THEME = 'CHANGE_THEME';
const GET_WEATHER_INFO = 'GET_WEATHER_INFO';
const SET_CURRENT_CITY = 'SET_CURRENT_CITY';

const initialState = {
  theme: 'light',
  weatherInfo: null,
  currentCity: '',
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.newTheme,
      };
    case GET_WEATHER_INFO:
      return {
        ...state,
        weatherInfo: action.newWeatherInfo,
      };
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.newCity,
      };
    default:
      return state;
  }
};

export const changeThemeSuccess = (newTheme) => ({
  type: CHANGE_THEME,
  newTheme,
});

const getWeatherSuccess = (newWeatherInfo) => ({
  type: GET_WEATHER_INFO,
  newWeatherInfo,
});

const setCurrentCitySuccess = (newCity) => ({
  type: SET_CURRENT_CITY,
  newCity,
});

export const getWeather =
  (cityName = 'mogilev', fn = get5DayWeather) =>
  async (dispatch) => {
    const city = citiesFn(cityName);
    dispatch(setCurrentCitySuccess(cityName));
    const response = await weatherAPI.getWeatherInfo(city.lat, city.lng);
    dispatch(getWeatherSuccess(response.data));
    await dispatch(fn(city.lat, city.lng));
  };


export default weatherReducer;
