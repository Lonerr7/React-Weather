import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { weatherAPI } from '../api/api';
import { citiesFn } from '../cities/cities';

const initialState = {
  weatherInfo: null,
  currentCity: '',
  isActiveBtn: false,
};

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (cityName = 'mogilev', { dispatch }) => {
    const city = citiesFn(cityName);
    dispatch(setCurrentCitySuccess(cityName));
    const response = await weatherAPI.getWeatherInfo(city.lat, city.lng);
    // dispatch(getWeatherSuccess(response.data));
    // await dispatch(get5DayWeather(city.lat, city.lng));
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentCitySuccess(state, action) {
      state.currentCity = action.payload;
    },
    getWeatherSuccess(state, action) {
      state.weatherInfo = action.payload;
    },
    setIsActiveBtnSucess(state, action) {
      state.isActiveBtn = action.payload;
    },
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      state.weatherInfo = action.payload;
    },
  },
});

export const {
  setIsActiveBtnSucess,
  setCurrentCitySuccess,
  getWeatherSuccess,
} = weatherSlice.actions;
export default weatherSlice.reducer;
