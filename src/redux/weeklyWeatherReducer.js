import { weatherAPI } from '../api/api';

const GET_5DAY_WEATHER = 'GET_WEEKLY_WEATHER';

const initialState = {
  weeklyWeatherArr: [],
};

const weeklyWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_5DAY_WEATHER:
      return {
        ...state,
        weeklyWeatherArr: action.newWeatherArr.slice(0, 5), //!
      };
    default:
      return state;
  }
};

const get5DayWeatherSuccess = (newWeatherArr) => ({
  type: GET_5DAY_WEATHER,
  newWeatherArr,
});

export const get5DayWeather = (lat, lon) => async (dispatch) => {
  const response = await weatherAPI.get7DayWeatherInfo(lat, lon);
  console.log(response.data);
  dispatch(get5DayWeatherSuccess(response.data.daily));
};

export default weeklyWeatherReducer;
