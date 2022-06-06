import { weatherAPI } from '../api/api';
import { citiesFn } from '../cities/cities';
import { get5DayWeather } from './weeklyWeatherReducer';

const GET_WEATHER_INFO = 'GET_WEATHER_INFO';
const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
const SET_ACTIVE_BTN = 'SET_ACTIVE_BTN';

const initialState = {
  weatherInfo: null,
  currentCity: '',
  isActiveBtn: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case SET_ACTIVE_BTN:
      return {
        ...state,
        isActiveBtn: action.newActiveBtn,
      };
    default:
      return state;
  }
};

const getWeatherSuccess = (newWeatherInfo) => ({
  type: GET_WEATHER_INFO,
  newWeatherInfo,
});

const setCurrentCitySuccess = (newCity) => ({
  type: SET_CURRENT_CITY,
  newCity,
});

export const setIsActiveBtnSucess = (newActiveBtn) => ({
  type: SET_ACTIVE_BTN,
  newActiveBtn,
});

export const getWeather =
  (cityName = 'mogilev') =>
  async (dispatch) => {
    const city = citiesFn(cityName);
    dispatch(setCurrentCitySuccess(cityName));
    const response = await weatherAPI.getWeatherInfo(city.lat, city.lng);
    dispatch(getWeatherSuccess(response.data));
    await dispatch(get5DayWeather(city.lat, city.lng));
  };

export default weatherReducer;
