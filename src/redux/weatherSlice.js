import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { weatherAPI } from '../api/api';
import { citiesFn } from '../cities/cities';
import { get7DaysWeather } from './weeklyWeatherSlice';

const initialState = {
  weatherInfo: null,
  currentCity: '',
};

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (cityName = 'mogilev', { dispatch }) => {
    const city = citiesFn(cityName);
    dispatch(setCurrentCitySuccess(cityName));
    const response = await weatherAPI.getWeatherInfo(city.lat, city.lng);
    await dispatch(get7DaysWeather({ lat: city.lat, lng: city.lng }));
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
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      state.weatherInfo = action.payload;
    },
  },
});

export const { setCurrentCitySuccess } = weatherSlice.actions;
export default weatherSlice.reducer;
