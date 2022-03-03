import { weatherAPI } from '../api/api';
import { citiesFn } from '../cities/cities';
import { get5DayWeather } from './weeklyWeatherReducer';

const CHANGE_THEME = 'CHANGE_THEME';
const GET_WEATHER_INFO = 'GET_WEATHER_INFO';

const initialState = {
  theme: 'light',
  weatherInfo: null,
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

export const getWeather =
  (cityName = 'mogilev') =>
  async (dispatch) => {
    const city = citiesFn(cityName);
    const response = await weatherAPI.getWeatherInfo(city.lat, city.lng);
    dispatch(getWeatherSuccess(response.data));
    await dispatch(get5DayWeather(city.lat, city.lng));
  };

export default weatherReducer;
