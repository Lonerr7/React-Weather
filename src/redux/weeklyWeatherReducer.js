import { weatherAPI } from '../api/api';

const GET_5DAY_WEATHER = 'GET_WEEKLY_WEATHER';
const SET_5DAY_WEATHER = 'SET_5DAY_WEATHER';
const GET_7DAY_WEATHER = 'GET_7DAY_WEATHER';

const initialState = {
  weatherArr: [],
  cachedWeatherArr: null,
};

const weeklyWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_5DAY_WEATHER:
      return {
        ...state,
        cachedWeatherArr: action.newWeatherArr.slice(0, -1),
        weatherArr: action.newWeatherArr.slice(0, 5),
      };
    case SET_5DAY_WEATHER:
      return {
        ...state,
        weatherArr: state.cachedWeatherArr.slice(0, 5),
      };
    case GET_7DAY_WEATHER:
      return {
        ...state,
        weatherArr: state.cachedWeatherArr,
      };
    default:
      return state;
  }
};

const get5DayWeatherSuccess = (newWeatherArr) => ({
  type: GET_5DAY_WEATHER,
  newWeatherArr,
});

export const set5DayWeatherSuccess = () => ({
  type: SET_5DAY_WEATHER,
});

export const get7DayWeatherSuccess = () => ({
  type: GET_7DAY_WEATHER,
});

export const get5DayWeather = (lat, lon) => async (dispatch) => {
  const response = await weatherAPI.get7DayWeatherInfo(lat, lon);
  dispatch(get5DayWeatherSuccess(response.data.daily));
};

export default weeklyWeatherReducer;
