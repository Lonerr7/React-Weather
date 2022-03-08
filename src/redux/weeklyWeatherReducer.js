import { weatherAPI } from '../api/api';

const GET_5DAY_WEATHER = 'GET_WEEKLY_WEATHER';
const SET_5DAY_WEATHER = 'SET_5DAY_WEATHER';
const GET_7DAY_WEATHER = 'GET_7DAY_WEATHER';
const SET_CURRENT_POPUP = 'SET_CURRENT_POPUP';
const DELETE_CURRENT_POPUP = 'DELETE_CURRENT_POPUP';

const initialState = {
  weatherArr: [],
  cachedWeatherArr: null,
  currentWeatherCard: null,
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
    case SET_CURRENT_POPUP:
      return {
        ...state,
        currentWeatherCard: state.weatherArr.filter((w) => w.dt === action.id),
      };
    case DELETE_CURRENT_POPUP:
      return {
        ...state,
        currentWeatherCard: null,
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

export const setCurrentPopupSuccess = (id) => ({
  type: SET_CURRENT_POPUP,
  id,
});

export const deleteCurrentPopupSuccess = () => ({
  type: DELETE_CURRENT_POPUP,
});

export const get5DayWeather = (lat, lon) => async (dispatch) => {
  const response = await weatherAPI.get7DayWeatherInfo(lat, lon);
  dispatch(get5DayWeatherSuccess(response.data.daily));
};

export default weeklyWeatherReducer;
