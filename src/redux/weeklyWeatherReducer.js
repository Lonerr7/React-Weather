import { weatherAPI } from '../api/api';

const GET_5DAY_WEATHER = 'GET_WEEKLY_WEATHER';
const GET_7DAY_WEATHER = 'GET_7DAY_WEATHER';

const initialState = {
  weatherArr: [],
};

const weeklyWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_5DAY_WEATHER:
      return {
        ...state,
        weatherArr: action.newWeatherArr.slice(0, 5),
      };
    case GET_7DAY_WEATHER:
      return {
        ...state,
        weatherArr: action.newWeatherArr.slice(0, -1),
      };
    default:
      return state;
  }
};

const get5DayWeatherSuccess = (newWeatherArr) => ({
  type: GET_5DAY_WEATHER,
  newWeatherArr,
});

const get7DayWeatherSuccess = (newWeatherArr) => ({
  type: GET_7DAY_WEATHER,
  newWeatherArr,
});

export const get5DayWeather = (lat, lon) => async (dispatch) => {
  const response = await weatherAPI.get7DayWeatherInfo(lat, lon);
  dispatch(get5DayWeatherSuccess(response.data.daily));
};

export const get7DayWeather = (lat, lon) => async (dispatch) => {
  const response = await weatherAPI.get7DayWeatherInfo(lat, lon);
  dispatch(get7DayWeatherSuccess(response.data.daily))
};

export default weeklyWeatherReducer;
